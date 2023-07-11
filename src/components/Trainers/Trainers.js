import "./trainers.scss";


const Trainers = () => {


  const data = [
    {
      url: 'https://static.vecteezy.com/system/resources/previews/002/754/156/large_2x/fitness-equipment-and-health-food-on-white-wooden-background-free-photo.JPG',
      title: 'Health & Fitness Guide',
      decsiription: 'Walking, lifting weights, doing chores – it’s all good. Regardless of what you do, regular exercise and physical activity is the path to health and well-being. Exercise burns fat, builds muscle, lowers cholesterol, eases stress and anxiety, lets us sleep restfully. In this guide, we match resources to your exercise needs -- at every fitness level.',
      btn: 'JOIN US',
    },
    {
      url: 'https://img.freepik.com/free-photo/flat-lay-dumbbells-with-copy-space_23-2148531468.jpg?w=2000',
      title: 'Fuel Your Body',
      decsiription: 'Protein can help you shed those unwanted pounds and keep your belly full. But it\'s important to eat the right amount and the right kind of protein to get the health benefits. Find out how much you know about hydration.',
      btn: 'READ',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/001/223/677/large_2x/fitness-dumbbells-on-color-background-free-photo.jpg',
      title: 'Your Blood Oxygen Level',
      decsiription: 'The blood in your body delivers oxygen to all of your cells. When you breathe and draw fresh oxygen into your lungs, red blood cells bind with the oxygen and carry it through your bloodstream. On a cellular level, oxygen helps replace cells that wear out, supplies you with energy, supports your immune system, and more. That\'s why it\'s important to make sure your blood oxygen level isn\'t too high or too low.',
      btn: 'READ',
    },
  ];


  return (
    <div className="container">
      <div className="header">Personal Trainers</div>
      <hr />
      <div className="card">

        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Cross-fit</h1>
              <p className="animate slide-left pop delay-5" style={{ color: "#e9ecef", fontWeight: "bold", marginBottom: "2.5rem" }}><em>Jack Matthew</em></p>
            </div>
            <div className="image-content animate slide delay-5">
              <img src="https://www.superprof.it/blog/wp-content/uploads/2018/01/personal-trainer-chi-%C3%A8.jpg" />
            </div>

          </div>
          <div className="text" >
            <p className="description">Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
          </div>
        </div>
        <div className="wrap animate pop">
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Box</h1>
              <p className="animate slide-left pop delay-5" style={{ color: "#e9ecef", fontWeight: "bold", marginBottom: "2.5rem" }}><em>John Russel</em></p>
            </div>
            <div className="image-content animate slide delay-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6zeDlnUZgwQBmDROjosId2TQPtFCg0TvBQ&usqp=CAU" />
            </div>
          </div>
          <div className="text">
            <p className="description">lorem10</p>
          </div>
        </div>
      </div>
      <div className="btnField">
        <button className="btn">View More</button>
      </div>
      <hr />
    </div>
  )
}

export default Trainers;
