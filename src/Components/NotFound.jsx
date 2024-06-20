

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src="./images/page-notfound.svg" alt="" />

            <h4 style={{color: 'red'}}>404 | Page Not Found !</h4>

        </div>
    )
}

export default NotFound;