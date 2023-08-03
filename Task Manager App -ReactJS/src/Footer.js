const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()}. Adie Sandoval</p>
        </footer>
    )
}

export default Footer