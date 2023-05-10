import React , { useState }  from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
	const [gallery, setGallery] = useState({
	  all: true,
	  group1: false,
	});
  
	const toggle = (value) => {
	  const newGallery = {
		all: false,
		group1: false,
	  };
  
	  switch (value) {
		case "all":
		  newGallery.all = true;
		  break;
		case "group1":
		  newGallery.group1 = true;
		  break;
		default:
		  break;
	  }
  
	  setGallery(newGallery);
	};
  
	return (
	  <div>
		<ol className="breadcrumb float-xl-end">
		  <li className="breadcrumb-item">
			<Link to="/gallery">Home</Link>
		  </li>
		  <li className="breadcrumb-item active">Gallery</li>
		</ol>
		<h1 className="page-header">
		  Gallery <small>header small text goes here...</small>
		</h1>
  
		<div id="options" className="mb-3">
		  <div className="d-flex flex-wrap text-nowrap mb-n1" id="filter">
			<button
			  onClick={() => toggle("all")}
			  className={
				"btn btn-white btn-sm border-0 me-1 mb-1 " +
				(gallery.all ? "active" : "")
			  }
			>
			  Show All
			</button>
			<button
			  onClick={() => toggle("group1")}
			  className={
				"btn btn-white btn-sm border-0 me-1 mb-1 " +
				(gallery.group1 ? "active" : "")
			  }
			>
			  Gallery Group 1
			</button>
		  </div>
		</div>
		<div id="gallery" className="gallery row gx-0">
		  <div
			className={
			  "col-lg-3 col-md-2 " +
			  (gallery.group1 || gallery.all ? "" : "d-none ")
			}
		  >
			<div className="image w-100">
			  <div className="image-inner">
				<Link to="/gallery">
				  <img src="/assets/img/gallery/gallery-3.jpg" alt="" />
				</Link>
				<p className="image-caption">#3452 - Scottwills Arch</p>
			  </div>
			  <div className="image-info">
				<h5 className="title">Etiam lobortis egestas nisl</h5>
				<div className="d-flex align-items-center mb-2">
				  <div className="rating">
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
				  </div>
				  <div className="ms-auto">
					<small>by</small> <Link to="/gallery">Lelouch Wong</Link>
				  </div>
				</div>
				<div className="desc">
				  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				  posuere cubilia Curae; Vivamus eget ultricies arcu.
				</div>
			  </div>
			</div>
		  </div>
		  <div
			className={
			  "col-lg-3 col-md-2 " +
			  (gallery.group1 || gallery.all ? "" : "d-none ")
			}
		  >
			<div className="image w-100">
			  <div className="image-inner">
				<Link to="/gallery">
				  <img src="/assets/img/gallery/gallery-3.jpg" alt="" />
				</Link>
				<p className="image-caption">#3452 - Scottwills Arch</p>
			  </div>
			  <div className="image-info">
				<h5 className="title">Etiam lobortis egestas nisl</h5>
				<div className="d-flex align-items-center mb-2">
				  <div className="rating">
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
				  </div>
				  <div className="ms-auto">
					<small>by</small> <Link to="/gallery">Lelouch Wong</Link>
				  </div>
				</div>
				<div className="desc">
				  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				  posuere cubilia Curae; Vivamus eget ultricies arcu.
				</div>
			  </div>
			</div>
		  </div>
		  <div
			className={
			  "col-lg-3 col-md-2 " +
			  (gallery.group1 || gallery.all ? "" : "d-none ")
			}
		  >
			<div className="image w-100">
			  <div className="image-inner">
				<Link to="/gallery">
				  <img src="/assets/img/gallery/gallery-3.jpg" alt="" />
				</Link>
				<p className="image-caption">#3452 - Scottwills Arch</p>
			  </div>
			  <div className="image-info">
				<h5 className="title">Etiam lobortis egestas nisl</h5>
				<div className="d-flex align-items-center mb-2">
				  <div className="rating">
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
				  </div>
				  <div className="ms-auto">
					<small>by</small> <Link to="/gallery">Lelouch Wong</Link>
				  </div>
				</div>
				<div className="desc">
				  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				  posuere cubilia Curae; Vivamus eget ultricies arcu.
				</div>
			  </div>
			</div>
		  </div>
		  <div
			className={
			  "col-lg-3 col-md-2 " +
			  (gallery.group1 || gallery.all ? "" : "d-none ")
			}
		  >
			<div className="image w-100">
			  <div className="image-inner">
				<Link to="/gallery">
				  <img src="/assets/img/gallery/gallery-3.jpg" alt="" />
				</Link>
				<p className="image-caption">#3452 - Scottwills Arch</p>
			  </div>
			  <div className="image-info">
				<h5 className="title">Etiam lobortis egestas nisl</h5>
				<div className="d-flex align-items-center mb-2">
				  <div className="rating">
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
					<span className="star active"></span>
				  </div>
				  <div className="ms-auto">
					<small>by</small> <Link to="/gallery">Lelouch Wong</Link>
				  </div>
				</div>
				<div className="desc">
				  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				  posuere cubilia Curae; Vivamus eget ultricies arcu.
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  

export default Gallery;