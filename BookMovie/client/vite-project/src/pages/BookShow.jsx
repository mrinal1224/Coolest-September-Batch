import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { getShowById } from "../apiCalls/shows";
import { useNavigate, useParams } from "react-router-dom";
import { message, Card, Row, Col, Button } from "antd";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import { bookShow, makePayment } from "../apiCalls/bookings";

const BookShow = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getShowById({ showId: params.id });
      if (response.success) {
        console.log(response.data);
        setShow(response.data);
        console.log(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  // Function to Book
  const book = async (transactionId) => {
    try {
      dispatch(showLoading());
      const response = await bookShow({
        show: params.id,
        transactionId,
        seats: selectedSeats,
        user: user._id,
      });
      if (response.success) {
        message.success("Show Booking done!");
        navigate("/profile");
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };
// Function to generate payment token and pass it to server
  const onToken = async (token) => {
    console.log(token)
    try {
      dispatch(showLoading());
      const response = await makePayment(
        token,
        selectedSeats.length * show.ticketPrice * 100
      );
      if (response.success) {
        message.success(response.message);
        book(response.data);// transactionId
         console.log(response);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const getSeats = () => {
    if (!show) return null;

    const columns = 12;
    const totalSeats = show.totalSeats; // 200
    const rows = Math.ceil(totalSeats / columns); // 17

    // Generate rows and seats using regular loops
    const seatRows = [];

    for (let row = 0; row < rows; row++) {
      const seats = [];

      for (let column = 0; column < columns; column++) {
        const seatNumber = row * columns + column + 1;

        // Calculation for the first iteration
        // 0*12 + 0+1 = 1
        // 0*12 + 1+1 = 2
        // 0*12 + 2+1 = 3
        // So on up till 12th seat

        // Calculation for the second iteration
        // 1*12 + 0+1 = 13
        // 1*12 + 1+1 = 14
        // 1*12 + 2+1 = 15
        // So on up till 24th seat

        // Calculation for the third iteration
        // 2*12 + 0+1 = 25
        // 2*12 + 1+1 = 26
        // 2*12 + 2+1 = 27
        // So on up till 36th seat

        //  Calculation for the third iteration
        // 16*12 +0+1 =

        if (seatNumber <= totalSeats) {
          let seatClass = "seat-btn";

          if (selectedSeats.includes(seatNumber)) {
            seatClass += " selected";
          }
          if (show.bookedSeats.includes(seatNumber)) {
            seatClass += " booked";
          }

          seats.push(
            <li key={`seat-${seatNumber}`}>
              <button
                onClick={() => {
                  if (selectedSeats.includes(seatNumber)) {
                    setSelectedSeats(
                      selectedSeats.filter(
                        (curSeatNumber) => curSeatNumber !== seatNumber
                      )
                    );
                  } else {
                    setSelectedSeats([...selectedSeats, seatNumber]);
                    console.log([...selectedSeats, seatNumber]);
                  }
                }}
                className={seatClass}
                disabled={show.bookedSeats.includes(seatNumber)}
              >
                {seatNumber}
              </button>
            </li>
          );
        }
      }

      seatRows.push(
        <div key={`row-${row}`} className="seat-row">
          {seats}
        </div>
      );
    }

    return (
      <div className="seat-container">
        <div className="screen-container">
          <p className="screen-text">
            Screen this side, you will be watching in this direction
          </p>
          <div className="screen-div"></div>
        </div>

        <div className="seats-wrapper">
          <ul className="seat-grid">{seatRows}</ul>
        </div>

        <div className="booking-summary">
          <div className="summary-item selected-seats">
            <span className="summary-label">Selected Seats:</span>
            <span className="summary-value">{selectedSeats.join(", ")}</span>
          </div>
          <div className="summary-item total-price">
            <span className="summary-label">Total Price:</span>
            <span className="summary-value">
              Rs. {selectedSeats.length * show.ticketPrice}
            </span>
          </div>
        </div>

        <div className="legend">
          <div className="legend-item">
            <div className="legend-box available"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="legend-box selected"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="legend-box booked"></div>
            <span>Booked</span>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {show && (
        <Row gutter={24}>
          <Col span={24}>
            <Card
              title={
                <div className="movie-title-details">
                  <h1>{show.movie.title}</h1>
                  <p>
                    Theatre: {show.theatre.name}, {show.theatre.address}
                  </p>
                </div>
              }
              extra={
                <div className="show-name py-3">
                  <h3>
                    <span>Show Name:</span> {show.name}
                  </h3>
                  <h3>
                    <span>Date & Time: </span>
                    {moment(show.date).format("MMM Do YYYY")} at{" "}
                    {moment(show.time, "HH:mm").format("hh:mm A ")}
                  </h3>
                  <h3>
                    <span>Ticket Price:</span> Rs. {show.ticketPrice}/-
                  </h3>
                  <h3>
                    <span>Total Seats:</span> {show.totalSeats}
                    <span> &nbsp;|&nbsp; Available Seats:</span>{" "}
                    {show.totalSeats - show.bookedSeats.length}{" "}
                  </h3>
                </div>
              }
              style={{ width: "100%" }}
            >
              {getSeats()}

              {selectedSeats.length > 0 && (
                <StripeCheckout
                  amount={selectedSeats.length * show.ticketPrice * 100}
                 
                  stripeKey="pk_test_51JKPQWSJULHQ0FL7VOkMrOMFh0AHMoCFit29EgNlVRSvFkDxSoIuY771mqGczvd6bdTHU1EkhJpojOflzoIFGmj300Uj4ALqXa"
                  token={onToken}
                >
                  {/* Use this one in some situation=> pk_test_eTH82XLklCU1LJBkr2cSDiGL001Bew71X8  */}
                  <div className="payment-button-container">
                    <Button type="primary" shape="round" size="large" block>
                      Pay Now
                    </Button>
                  </div>
                </StripeCheckout>
              )}
            </Card>
          </Col>
        </Row>
      )}

      <style jsx>{`
        .seat-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          padding: 20px 0;
        }

        .screen-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .screen-text {
          margin-bottom: 15px;
          text-align: center;
          font-weight: 500;
          color: #555;
        }

        .screen-div {
          height: 15px;
          background: linear-gradient(to bottom, #ffffff, #d1d1d1);
          width: 100%;
          transform: perspective(300px) rotateX(-10deg);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          margin-bottom: 50px;
          border-radius: 3px;
        }

        .seats-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          overflow-x: auto;
          padding: 10px;
        }

        .seat-grid {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          max-width: 800px;
        }

        .seat-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 5px;
        }

        .seat-btn {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          border: 1px solid #ddd;
          background-color: #f8f8f8;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .seat-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .seat-btn.selected {
          background-color: #1890ff;
          color: white;
          border-color: #0076e4;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
        }

        .seat-btn.booked {
          background-color: #f5f5f5;
          cursor: not-allowed;
          color: #999;
          border-color: #e0e0e0;
          box-shadow: none;
        }

        .booking-summary {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 100%;
          max-width: 800px;
          margin: 30px auto 20px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          border: 1px solid #eee;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .summary-item {
          flex: 1;
          min-width: 250px;
          padding: 10px;
        }

        .summary-label {
          font-weight: 600;
          color: #333;
          margin-right: 10px;
        }

        .summary-value {
          font-weight: 500;
          color: #1890ff;
        }

        .total-price .summary-value {
          font-size: 18px;
          color: #52c41a;
        }

        .legend {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 10px 0 30px;
          width: 100%;
          max-width: 800px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-box {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }

        .legend-box.available {
          background-color: #f8f8f8;
        }

        .legend-box.selected {
          background-color: #1890ff;
          border-color: #0076e4;
        }

        .legend-box.booked {
          background-color: #f5f5f5;
          border-color: #e0e0e0;
        }

        .payment-button-container {
          max-width: 400px;
          margin: 15px auto;
        }

        @media (max-width: 768px) {
          .booking-summary {
            flex-direction: column;
            gap: 10px;
          }

          .seat-btn {
            width: 35px;
            height: 35px;
            font-size: 12px;
          }

          .seat-row {
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default BookShow;
