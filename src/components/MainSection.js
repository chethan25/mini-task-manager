import './main-section.css';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="main-section-header-container">
        <div className="main-section-header-title-container">
          <h2 className="main-section-header-title">Manage Tasks</h2>
        </div>
        <div className="main-section-header-add-task-container">
          <button className="add-task-btn" type="button">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
