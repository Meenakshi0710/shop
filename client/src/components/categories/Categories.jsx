import React from 'react'
import "./categories.scss"
import {Link} from "react-router-dom"

const categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="/img/4.jpg" alt="" />
                <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="/img/4.jpg" alt="" />
            <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="/img/4.jpg" alt="" />
            <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="/img/4.jpg" alt="" />
                    <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="/img/4.jpg" alt="" />
                    <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="/img/4.jpg" alt="" />
            <button>
                    <Link className='link' to = "/products/1">Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default categories