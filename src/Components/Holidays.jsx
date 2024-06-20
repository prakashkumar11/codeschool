
import Footer from './Footer'
import Navbar from './Navbar'

const Holidays = ()=>{
    const holidays = [
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            date: '10-04-2024'
        },
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            date: '10-04-2024'
        },
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            date: '10-04-2024'
        },
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            date: '10-04-2024'
        },
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            date: '10-04-2024'
        }
    ]
    return (
        <div>
            <Navbar />

            <div>
            <header style={{
                    height: 280,
                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(26,20,74,1) 0%, rgba(59,52,120,1) 100.2% )',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white',
                        fontWeight: 600,
                        color: 'white'
                    }}>
                        <i class="ri-drag-move-line" style={{marginRight: 16}}></i>
                        Your Holiday`s
                    </h1>
                </header>
            </div>

            <div style={{
                width: '60%',
                margin: '0 auto',
                padding: '64px 0'
            }}>

                <table width="100%">
                    <thead>
                        <tr style={{
                            background: '#ddd'
                        }}>
                            <th style={{padding: 14}}>S/No</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            holidays.map((item, index)=>(
                                <tr style={{
                                    textAlign: 'center'
                                }}>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{index+1}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.title}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.duration}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ddd'}}>{item.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Holidays