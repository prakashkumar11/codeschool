import Navbar from './Navbar';
import Footer from './Footer';

const teachers = [
    {
        image: './teachers/d.jpg',
        name : 'Nitesh Sharma',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/e.jpg',
        name : 'Karan Singh',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/f.jpg',
        name : 'Rahul singh',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/g.jpg',
        name : 'Kishan Kumar',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/h.jpg',
        name : 'Nitesh Sharma',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/i.jpg',
        name : 'Karan Singh',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/j.jpg',
        name : 'Rahul singh',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/k.jpg',
        name : 'Kishan Kumar',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/l.jpg',
        name : 'Kiran Arora',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/m.jpg',
        name : 'Karan Singh',
        qua : 'MCA (Indian University)'
    },
    {
        image: './teachers/n.jpg',
        name : 'Rahul singh',
        qua : 'BCA (Punjab University)'
    },
    {
        image: './teachers/o.jpg',
        name : 'Sonali Singh',
        qua : 'CA (Bihar University)'
    },
]


const Teachers = () => {
    return (
        <div>
            <Navbar />
            
            <div>
                <header style={{
                    height: 280,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% )',
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white',
                        fontWeight: 600,
                        color: 'white'
                    }}>
                        <i className="ri-user-voice-line" style={{marginRight: 16}}></i>
                        Teachers
                    </h1>
                </header>
                
                <section style={{
                    padding: '80px 0',
                    width: '80%',
                    margin: '0 auto',
                    display: 'flex',
                    columnGap: '5%',
                    rowGap: 48,
                    flexWrap: 'wrap'
                }}>
                    {
                        teachers.map(function(item, index) {
                            return (
                                <div style={{width: '20%'}}>
                                    <img src={item.image} alt={item.image} width='100%' />
                                    <h2 style={{padding: 0, margin: 4}}>{item.name}</h2>
                                    <p style={{padding: 0, margin: 0, color: 'gray'}}>{item.qua}</p>
                                </div>
                            )
                        })
                    }

                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Teachers;