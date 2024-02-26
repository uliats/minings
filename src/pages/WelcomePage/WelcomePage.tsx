import './WelcomePage.sass';
import mockImage from "/src/assets/default.png"; // Import mock image

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h1>Добро пожаловать!</h1>
            <p>Система разработки месторождений обеспечивающая компаниям,
                занимающимся извлечением природных ресурсов, эффективное управление процессом разработки</p>
            <p>Здесь вы можете ознакомиться с необходимыми  услугами </p>
            <img src={mockImage} alt="Описание вашей системы" /> {/* Use mock image */}
        </div>
    );
}

export default WelcomePage;
