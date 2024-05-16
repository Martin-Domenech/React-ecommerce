import './ItemList.css'
import Card from '../Card/Card.jsx'
import { useState, useEffect } from 'react' 
import { useParams } from "react-router-dom"
import { Footer } from '../Footer/Footer.jsx'
import { Flex, Spinner } from '@chakra-ui/react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase.js'

export const ItemList = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { categoriaId } = useParams()


    useEffect(() => {
        setLoading(true)
        const getData = async () => {
          const coleccion = collection(db, 'productos')
    
          const queryRef = !categoriaId ? 
          coleccion 
          : 
          query(coleccion, where('categoria', '==', categoriaId))
    
          const response = await getDocs(queryRef)
    
          const productos = response.docs.map((doc) => {
            const newItem = {
              ...doc.data(),
              id: doc.id
            }
            return newItem
          })
          setProducts(productos)
          setLoading(false)
        }
        getData()
      }, [categoriaId])

    return(
        <div>
        {
            loading ?
            <Flex 
            justify={'center'}
            align={'center'}
            h={'50vh'}>
                <Spinner
                justify={'center'}
                align={'center'}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
            </Flex>
            :
            <section className="itemlist">
                <div className="cards_cont">
                    <section className="cards">
                        {
                            products.map(({ id, nombre, precio, categoria, img }) => (
                                <Card
                                    key={id}
                                    id={id}
                                    nombre={nombre}
                                    precio={precio}
                                    categoria={categoria}
                                    img={img}
                                />
                            ))
                        }
                    </section>
                </div>
                <Footer />
            </section>
        }
        </div>
            
        
    )
}