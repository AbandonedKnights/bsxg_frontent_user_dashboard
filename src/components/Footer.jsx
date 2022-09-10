

export default function Footer (props) {
  return (
    <div className="footer_area footer mt-auto py-3">
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Join Us</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of services</a>
                </li>
                <li>
                  <a href="">Communities </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
              <h3>Data & Cooperation</h3>
              <ul>
                <li>
                  <a href="">Apply to be VIP</a>
                </li>
                <li>
                  <a href="">Fees</a>
                </li>
                <li>
                  <a href="">Apply to list</a>
                </li>
                <li>
                  <a href="">Market Cooperation</a>
                </li>
                <li>
                  <a href="">Bug Bounty</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
              <h3>Reference</h3>
              <ul>
                <li>
                  <a href="">Quick Start</a>
                </li>
                <li>
                  <a href="">API</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="">Submit Your Problem</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
              <h3>22H Total Trading Valume</h3>
              <ul>
                <li>
                  <a href="">BT: 65.65</a>
                </li>
                <li>
                  <a href="">ETH: 65.65</a>
                </li>
                <li>
                  <a href="">USDT: 65.65</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-1 col-md-4 col-sm-6 col-xs-6">
              <h3>communities</h3>
            </div>
          </div>
        </footer>
      </div>
      <footer className="text-center text-muted">
        &copy; {new Date().getFullYear()} All Rights Reserved. {/* inrx.exchange */} 
      </footer>
    </div>
  );
}
