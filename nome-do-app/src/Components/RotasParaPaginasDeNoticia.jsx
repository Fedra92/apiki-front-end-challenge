import { useState, useEffect } from "react";
import Axios  from "axios";
import { Route, Routes } from 'react-router-dom';
import { PaginaDaNoticia } from "./PaginaDaNoticia";

export function RotasParaPaginasDeNoticia() {
    const [ConteudosDosPosts, setConteudosDosPosts] = useState([])
    const baseURL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            //console.log(response)
            setConteudosDosPosts(response.data)
        }
        getData()
    }, [])

    return(
        <>
            
            {ConteudosDosPosts.map((item) => {
                const embeddedImage = item['_embedded']['wp:featuredmedia'][0]['source_url']
                const itemTitle = item['title']['rendered']
                const itemSlug = item['slug']
                const conteudo = item['content']['rendered']
                // console.log(item['slug'])

               return( 
                    <Route path={`/${itemSlug}`} element={ <PaginaDaNoticia  titulo={itemTitle}/> } />                    
               ) 
               
            })
            }
            
        </>
    )
    
}
