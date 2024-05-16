import React, { useContext, useState } from 'react'
import './Checkout.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Heading,
    Image,
    Box,
    Text,
  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase' 
import Context from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone:''
    })
    const [ error, setError] = useState([])

    const { cart, getTotal, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const navigate = useNavigate()

    const validateForm = () => {
        const errors = {}
    
        if (!user.name) {
            errors.name = "Tenés que agregar un nombre"
        } else if (user.name.length < 4) {
            errors.name = "Nombre muy corto"
        }
    
        if (!user.phone || user.phone.length < 8 || user.phone.length > 12) {
            errors.phone = "Ingrese un número de teléfono válido"
        }
    
        if (!user.email) {
            errors.email = "Tenés que ingresar un correo electrónico"
        }
    
        if (!user.repeatedEmail) {
            errors.repeatedEmail = "Tenés que repetir el correo electrónico"
        }
    
        if (user.email !== user.repeatedEmail) {
            errors.email = "Los correos electrónicos no coinciden"
        }
    
        setError(errors)
    
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        
        console.log(validateForm())

        if(validateForm()){

            const ordersCollection = collection(db, 'orders')   

            try {
                for(const item of cart) {
                    const productRef = doc(db, 'productos', item.id)
                    const productDoc = await getDoc(productRef)

                    const order = {
                        buyer: user,
                        cart: cart,
                        total: getTotal(),
                        fechaDeCompra: Timestamp.now() 
                    }
                    
                    const orderDocRef = await addDoc(ordersCollection, order)
                    Swal.fire({
                        title: 'Gracias por tu compra',
                        text: `El número de orden es: ${orderDocRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'Ver mas productos'
                      }).then(()=> {
                        clearCart()
                        navigate('/')
                      })
                }
            } catch (error) {
                console.log(error)
            }

        }
        else{
            const errorMessages = Object.values(error).join("\n");
            Swal.fire({
                icon: "error",
                title: "Por favor, revise los datos ingresados",
                text: errorMessages,
            });
        }
    }


  return (
    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
        <Box>
            <Text>total de la compra: ${getTotal()}</Text>
        </Box>
        <Heading mb={2}>Datos de facturación</Heading>
        <FormControl w={'40%'}>
            <Input type='text' name='name' placeholder='Ingrese el nombre' onChange={updateUser} mb={2}/>
            <Input type='email' name='email' placeholder='Ingrese email' onChange={updateUser} mb={2}/>
            <Input type='email' name='repeatedEmail' placeholder='Ingrese nuevamente el email'  onChange={updateUser} mb={2}/>
            <Input type='text' name='phone' placeholder='Ingrese su teléfono' onChange={updateUser} mb={2}/>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <Button onClick={getOrder}>Finalizar compra</Button>
            </Flex>
        </FormControl>
    </Flex>
  )
}

export default Checkout