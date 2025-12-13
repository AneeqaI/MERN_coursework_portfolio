import './App.css';

function AppColor(props) {
  function greetUser(e) {
    // change page background to the button’s color value
    document.body.style.background = e.target.value;
    // display an alert greeting the user by the name entered in the textbox
    alert("Welcome Mr " + document.getElementById(props.color).value);
  }

  return (
    // ✅ use <div> instead of <body> (React best practice)
    <div style={{ backgroundColor: 'powderblue', color: 'black', padding: '20px', margin: '10px' }}>
      <h1>{props.heading}</h1>

      <p style={{ color: 'blue', font: '30px Arial' }}>
        How to create function component.
      </p>

      <label className="label" id="lbl">{props.lbl}</label>
      <input id={props.color} type="text" />

      <button value={props.color} onClick={greetUser}>
        Colour me {props.color}
      </button>
    </div>
  );
}

export default AppColor;
