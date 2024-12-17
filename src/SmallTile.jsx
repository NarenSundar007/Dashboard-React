import 'bootstrap/dist/css/bootstrap.min.css';


function SmallTile(){
    return (
        
        <div class="row featurette">
      <div class="col-md-7 order-md-2 middle-text">
        <h2 class="featurette-heading fw-normal lh-1">We can Put a Small Intro about the club here.. <span class="text-body-secondary">See for yourself.</span></h2>
        <p class="lead">This is where idea meets Technology</p>
      </div>
      <div class="col-md-5 order-md-1">
<img src="/iot.jpg" alt="iot-logo" style={{width: "30rem"}}/>      
</div>
    </div>
    )
}

export default SmallTile;