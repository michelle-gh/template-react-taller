import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get_flowers } from '../../utils/flowers-axios';

function Gallery() {
	const [flowers, setFlowers] = useState([])
	const [loadData, setLoadData] = useState(true)
	useEffect(() => {
		if(loadData){
			get_flowers().then((res) => {
				console.log(...res.flowers)
				setFlowers([...res.flowers])
				setLoadData(false)
			})
		}
		

	}, [])
	return (
		<div>
			<ol className="breadcrumb float-xl-end">
				<li className="breadcrumb-item"><Link to="/gallery">Home</Link></li>
				<li className="breadcrumb-item active">Gallery</li>
			</ol>
			<h1 className="page-header"> Galeria de flores <small> Aqui encontraras las flores disponibles</small></h1>

			<div id="gallery" className="gallery row gx-0">
				{
					loadData ? (<></>) :
						(
							<>
								{flowers.map((flower, index) => (
									<div id={index} className={'col-lg-3 col-md-2'}>
										<div className="image w-100">
											<div className="image-inner">
												<img src={flower.image ? "https://res.cloudinary.com/dyytwkgar/" + flower.image : "https://res.cloudinary.com/dyytwkgar/image/upload/v1683614109/media/flower_images/default-image_rnvn8x.jpg"} alt={flower.name} />
											</div>
											<div className="image-info">
												<h5 className="title">{flower.name}</h5>
												<div className="desc">
													{flower.price}
												</div>
											</div>
										</div>
									</div>
								))}
							</>
						)
				}
			</div>
		</div>
	);
}

export default Gallery;