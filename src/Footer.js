const Footer = () => {

    var today = new Date();

    return (
        <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div>
                    <h5>Team Member Allocation App - {today.getFullYear()}</h5>
                </div>
            </div>
        </footer>
    )
}
export default Footer