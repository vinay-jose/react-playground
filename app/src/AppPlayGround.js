import './AppPlayGround.css';
import Card from './components/Card';
import HooksDemo from './components/HooksDemo';
// import APIDataFetch from './components/APIDataFetch';

function AppPlayGround() {
  return (
    <div className="App">
      {/* <div className='App-header'>
        <APIDataFetch/>
      </div> */}
      <header className="App-header">
        <Card
          header = "Read"
          title = "Article 1"
          desc = "Lorem ...."          
        />
        <Card
          header = "Practice"
          title = "Article 2"
          desc = "Lorem ...."          
        />
        <Card
          header = "Learn"
          title = "Article 3"
          desc = "Lorem ...."          
        />
      </header>
      <div className="App-header">
        <HooksDemo/>
      </div>
    </div>
  );
}

export default AppPlayGround;
