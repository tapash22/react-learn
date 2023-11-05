import { useParams } from "react-router-dom"

const withRoute = WrapperComponent => props =>{
    const params = useParams();

    return (
        <WrapperComponent 
        {...props}
        params = {params}
        />
    )
}

export default withRoute;