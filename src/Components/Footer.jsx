import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#280044',
            padding: '80px 10%',
            display: 'flex'
        }}>

            <div style={{width: '100%'}}>
                <h2 style={{color: 'white',
                fontWeight: '600',
                margin: 0
                }}>Codeschool</h2>
                <p style={{color: '#ccc'}}>Online learning community school. <br />For coder kids ... </p>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{color: 'white',
                fontWeight: '600',
                margin: 0
                }}>Popular Link</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                        <Link to='/' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>Home</Link>
                    </li>

                    <li>
                        <Link to='/teachers' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>Teachers</Link>
                    </li>

                    <li>
                        <Link to='/holidays' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>Holidays</Link>
                    </li>

                    <li>
                        <Link to='/contactus' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>Contact us</Link>
                    </li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{color: 'white',
                fontWeight: '600',
                margin: 0
                }}>Social Link</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                        <Link to='/' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>
                            <i className="ri-linkedin-box-line" style={{marginRight: 4}}></i>
                            Linkedin
                        </Link>
                    </li>

                    <li>
                        <Link to='/teachers' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>
                            <i className="ri-facebook-circle-fill" style={{marginRight: 4}}></i>
                            Facebook
                        </Link>
                    </li>

                    <li>
                        <Link to='/holidays' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>
                            <i className="ri-instagram-line" style={{marginRight: 4}}></i>
                            Instagram
                        </Link>
                    </li>

                    <li>
                        <Link to='/contactus' style={{
                            textDecoration: 'none',
                            color: 'beige'
                        }}>
                            <i className="ri-github-fill" style={{marginRight: 4}}></i>
                            Git & Github
                        </Link>
                    </li>
                </ul>
            </div>


            <div style={{width: '100%'}}>
                <h2 style={{color: 'white',
                fontWeight: '600',
                margin: 0
                }}>Contact-us</h2>

                <form action="" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    marginTop: '18px'

                }}>
                    <input
                        required
                        name="fullname"
                        placeholder="Full Name"
                        type="text"
                        style={{
                            border: 'none',
                            padding: '12px',
                            borderRadius: 4,
                            width: '100%'
                        }} 
                    />

                    <input
                        required
                        name="email"
                        placeholder="Example@gmail.com"
                        type="text"
                        style={{
                            border: 'none',
                            padding: '12px',
                            borderRadius: 4,
                            width: '100%'
                        }} 
                    />

                    <textarea
                        required
                        name="message"
                        placeholder="Enter message"
                        type="text"
                        style={{
                            border: 'none',
                            padding: '12px',
                            borderRadius: 4,
                            width: '100%'
                        }} 

                        rows='3'
                    />

                    <button style={{
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: 4,
                        width: 'fit-content',
                        background: '#f38e1e',
                        cursor: 'pointer',
                        color: 'white',
                    }}>Submit</button>

                </form>

            </div>
        
        </footer>
    )
}

export default Footer;