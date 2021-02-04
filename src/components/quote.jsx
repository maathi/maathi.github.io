import "../style/quote.css"
import { FaQuoteLeft } from "react-icons/fa"
function Quote() {
  return (
    <div id="quote">
      <p>
        <span>
          <FaQuoteLeft />
        </span>
        &nbsp; Education never ends, Watson. It is a series of lessons, with the
        greatest for the last.
      </p>
      <span id="author">Sherlock Holmes</span>
    </div>
  )
}
export default Quote
