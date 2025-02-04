// import React, { Component } from 'react'

// export class Newsitem extends Component {
//     render() {
//         let { title, description, imageUrl, newsurl, author, date, source } = this.props;

//         return (
//             <div >
//                 <div className="card">
//                     <div
//                         style={
//                             {
//                                 display: "flex",
//                                 justifyContent: "flex-end",
//                                 position: "absolute",
//                                 right: "0"
//                             }} >
//                         <span className=" badge unded-pill bg-danger" >
//                             {source}</span>
//                     </div>
//                     <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-110926144,width-1070,height-580,imgsize-61902,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}  </h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Newsitem







import React from 'react'

const  Newsitem = (props) =>{
    
        let { title, description, imageUrl, newsurl, author, date, source } = props;

        return (
            <div >
                <div className="card">
                    <div
                        style={
                            {
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "absolute",
                                right: "0"
                            }} >
                        <span className=" badge unded-pill bg-danger" >
                            {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-110926144,width-1070,height-580,imgsize-61902,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem
