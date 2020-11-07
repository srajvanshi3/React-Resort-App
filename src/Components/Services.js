import React, { Component } from 'react'
import  Title  from './Title'
import{FaCocktail , FaHiking, FaShuttleVan , FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    
    state={
        services : [{
            icon:<FaCocktail/>,
            title:"Free cocktails",
            info : "kajnd akdn knd kadsb kkd kdbkbdkabdeakj kjasdkandkad adbkabd kjabdkj kad kjabd kadbsd kj"
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info : "kajnd akdn knd kadsb kkd kdbkbdkabdeakj kjasdkandkad adbkabd kjabdkj kad kjabd kadbsd kj"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shutlle van",
            info : "kajnd akdn knd kadsb kkd kdbkbdkabdeakj kjasdkandkad adbkabd kjabdkj kad kjabd kadbsd kj"
        },
        {
            icon:<FaBeer/>,
            title:"Free beer",
            info : "kajnd akdn knd kadsb kkd kdbkbdkabdeakj kjasdkandkad adbkabd kjabdkj kad kjabd kadbsd kj"
        }]
    }

    render() {
        return (
            <section>
                <Title title='Services'/>
                    <div className='services-center'>
                     {this.state.services.map((item,index)=>{
                       return (
                        <article key={index} className='service'>
                        <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                    </article>
                       )
                     })}
                    </div>
                

            </section>
        )
    }
}
