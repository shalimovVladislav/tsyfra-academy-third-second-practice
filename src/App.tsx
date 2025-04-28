import Card from './Card';
import Button from './Button';

function App() {

  return (
    <div className="flex items-center justify-center flex-col gap-4 min-h-screen bg-gray-100">
      <Card
        title="Заголовок карточки"
        content="Карточка написана с использованием Tailwind"
        buttonText="Тыкни!"
        onButtonClick={() => alert('Кнопочка тыкнута!')}
      />
      <Button primary onClick={() => alert('Primary')}>
        Primary Emotion кнопочка
      </Button>

      <Button outline onClick={() => alert('Outline')}>
        Outline Emotion кнопочка
      </Button>

      <Button onClick={() => alert('Default')}>
        Default Emotion кнопочка
      </Button>
    </div>
  )
}

export default App
