
export const Error = ({error}) => {
    return(
        <div>
        <h2> Error </h2>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
        </div>
    )
}