import "./login.css";
function login() {
    const resetForm = () => {
        document.getElementById("reset").reset();
    }

  return (
    <section>
    <div>login</div>
    <form id="reset">
    <div>user</div>
    <input type="text" id="fname" name="firstname"/>
    <div>password</div>
    <input type="password" id="lname" name="Lastname"/>
    <input type="button" value="submit"/>
    <input type="reset" value="reset" onClick={resetForm}/>
    </form>
    </section>
  )
}

export default login