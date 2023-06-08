import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Bored({ setShowBored }) {
  const [activity, setActivity] = useState();

  const getActivity = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity/");
    const data = await res.json();
    setActivity(data);
    toast.success("Activity generated!");
  };

  return (
    <>
      <ToastContainer theme="colored" position="bottom-center" />
      <section className="bored">
        <h2>Sorry for being bored</h2>
        <p>Use the button to generate a fun activity you can try</p>

        <button onClick={getActivity} className="btn">
          Generate activity
        </button>

        {activity ? (
          <div>
            <article>Activity Name: {activity.activity} </article>
            <article>Activity Type: {activity.type} </article>
            {activity.link && (
              <article>
                Link to learn: <a href={activity.link}>{activity.link}</a>{" "}
              </article>
            )}
            <article>Number of people needed: {activity.participants} </article>
          </div>
        ) : (
          <p>Click on the button to get a list of fun activities you can do!</p>
        )}
      </section>

      <div className="bored-btn-container">
        <button
          onClick={() => setShowBored(false)}
          style={{
            transform: "scale(70%)",
          }}
          className="btn"
        >
          Go Back
        </button>
      </div>
    </>
  );
}
