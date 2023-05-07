import { useState, useEffect } from "react";
import Axios  from "axios";
import { Route, Link, Routes } from 'react-router-dom';
import { CardNoticia } from './CardNoticia'
import { PaginaDaNoticia } from "./PaginaDaNoticia";
import { Home } from "./Home";


export function ListaDePosts () {
    const [listaPosts, setListaPosts] = useState([])
    const baseURL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            //console.log(response)
            setListaPosts(response.data)
        }
        getData()
    }, [])

    return(
        <>
            
            {listaPosts.map((item) => {
                const embeddedImage = item['_embedded']['wp:featuredmedia'][0]['source_url']
                const itemTitle = item['title']['rendered']
                const itemSlug = item['slug']
                const conteudo = item['content']['rendered']
                // console.log(item['slug'])

               return( 
                
                <div key={item.id}>
                    <Routes>
                        <Route path={`/${itemSlug}`} element={<Home/>} />    
                    </Routes>
                    <CardNoticia imagem={embeddedImage} titulo={itemTitle} /> 
                    <Link to={`/${itemSlug}`}>Ler notícia</Link>

                
                </div>
                
                
               ) 
               
            })
            }
            
        </>
    )
    
}
