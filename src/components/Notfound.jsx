import { useNavigate } from "react-router-dom"

 const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div>
        <div className="not-found">
            <div class="section">
                <h1 className="error">404</h1>
                <div className="page">Ooops!!! The page you are looking for is not found</div>
                <button className="back-home" onClick={(() => navigate('/'))}>Back to home</button>
            </div>
        </div>
        </div>
    )
}
export default Notfound;