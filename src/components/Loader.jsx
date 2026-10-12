function Loader({ message = 'Loading...' }) {
return ( <div
   className="loader-container"
   role="status"
   aria-live="polite"
 > <span className="loader-spinner" aria-hidden="true" /> <p>{message}</p> </div>
)
}

export default Loader
