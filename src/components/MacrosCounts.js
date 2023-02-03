import './MacrosCounts.css';
import calorieIcon from '../assets/calories-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import lipidIcon from '../assets/fat-icon.png';

const MacrosCounts = ({userMacros}) => {

  const calorieCount = userMacros?.calorieCount;
  const proteinCount = userMacros?.proteinCount;
  const carbsCount = userMacros?.carbohydrateCount;
  const lipidCount = userMacros?.lipidCount;

  return (
    <div className='macroscounts-container'>

        <div className="macro-container">
          <img src={calorieIcon} alt="Calorie icon" />
          <div className="macro-text-container">
            <h2 className='macro-count'>{calorieCount}kCal</h2>
            <p className="macro-type">Calories</p>
          </div>
        </div>

        <div className="macro-container">
          <img src={proteinIcon} alt="Protein icon" />
          <div className="macro-text-container">
            <h2 className='macro-count'>{proteinCount}g</h2>
            <p className="macro-type">Proteines</p>
          </div>
        </div>

        <div className="macro-container">
          <img src={carbsIcon} alt="Carbs icon" />
          <div className="macro-text-container">
            <h2 className='macro-count'>{carbsCount}g</h2>
            <p className="macro-type">Calories</p>
          </div>
        </div>

        <div className="macro-container">
          <img src={lipidIcon} alt="Lipid icon" />
          <div className="macro-text-container">
            <h2 className='macro-count'>{lipidCount}g</h2>
            <p className="macro-type">Lipides</p>
          </div>
        </div>
        
        
    </div>
  )
}

export default MacrosCounts