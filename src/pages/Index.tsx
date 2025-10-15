import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    preferences: '',
    email: ''
  });

  const stories = [
    {
      title: 'Приключения Маши в Облачном Королевстве',
      age: '4-7 лет',
      description: 'Маша отправляется в волшебное путешествие через радужные облака',
      image: 'https://cdn.poehali.dev/projects/484da713-b6f9-4b91-a226-d2dfdcc59da1/files/95ca9093-ed4a-4eff-a3bb-6e6d7d0b9a48.jpg'
    },
    {
      title: 'Саша и Волшебная Книга Желаний',
      age: '5-9 лет',
      description: 'История о мальчике, который нашёл книгу, исполняющую мечты',
      image: 'https://cdn.poehali.dev/projects/484da713-b6f9-4b91-a226-d2dfdcc59da1/files/1e947f6c-39bf-46ec-b63a-3e650e3063c4.jpg'
    },
    {
      title: 'День рождения Ани в Сказочном Лесу',
      age: '3-6 лет',
      description: 'Незабываемый праздник с лесными друзьями и волшебными сюрпризами',
      image: 'https://cdn.poehali.dev/projects/484da713-b6f9-4b91-a226-d2dfdcc59da1/files/95ca9093-ed4a-4eff-a3bb-6e6d7d0b9a48.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заказ оформлен:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-magical-pink/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-heading text-magical-pink">
              Волшебные Сказки
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Сказки', 'Мультфильмы', 'Галерея', 'Заказать', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-magical-purple transition-colors font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-heading text-magical-purple leading-tight">
                Добро пожаловать в мир волшебных сказок!
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                Тут каждая история — о тебе!
              </p>
              <p className="text-lg text-gray-600">
                Погружайся в увлекательные приключения, которые ты захочешь смотреть и читать снова и снова.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('заказать')}
                  className="bg-magical-pink hover:bg-magical-pink/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Создать свою сказку
                  <Icon name="Sparkles" className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('галерея')}
                  className="border-2 border-magical-purple text-magical-purple font-bold text-lg px-8 py-6 rounded-full hover:bg-magical-purple hover:text-white transition-all"
                >
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-magical-yellow/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-magical-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              <img
                src="https://cdn.poehali.dev/projects/484da713-b6f9-4b91-a226-d2dfdcc59da1/files/95ca9093-ed4a-4eff-a3bb-6e6d7d0b9a48.jpg"
                alt="Волшебная история"
                className="rounded-3xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-magical-pink/10 via-magical-purple/10 to-magical-turquoise/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'BookOpen', title: 'Уникальные Сказки', text: 'Каждая история создаётся специально для вашего ребёнка' },
              { icon: 'Film', title: 'Яркие Мультфильмы', text: 'Персонализированные анимационные истории' },
              { icon: 'Heart', title: 'С Любовью', text: 'Волшебство, созданное для самых дорогих людей' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-white/80 backdrop-blur-sm border-2 border-magical-yellow/30 rounded-3xl hover:shadow-xl transition-all animate-fade-in hover:scale-105" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-magical-pink to-magical-purple rounded-full flex items-center justify-center">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading text-magical-purple mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="сказки" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-magical-purple mb-4">
            Наши Сказки
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Истории, которые оживают на страницах книг
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Приключения в Сказочном Лесу', age: '3-6 лет', desc: 'Путешествие с лесными друзьями' },
              { title: 'Космическая Одиссея', age: '7-10 лет', desc: 'Полёт к далёким звёздам' },
              { title: 'Секреты Волшебного Замка', age: '5-8 лет', desc: 'Загадки древнего королевства' },
              { title: 'Морские Приключения', age: '4-7 лет', desc: 'Погружение в подводный мир' }
            ].map((story, idx) => (
              <Card key={idx} className="overflow-hidden bg-white rounded-3xl border-2 border-magical-turquoise/30 hover:shadow-2xl transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="h-48 bg-gradient-to-br from-magical-yellow/40 via-magical-pink/40 to-magical-purple/40 flex items-center justify-center">
                  <Icon name="BookOpen" size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-magical-yellow/20 text-magical-purple px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {story.age}
                  </div>
                  <h3 className="text-2xl font-heading text-magical-purple mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.desc}</p>
                  <Button className="w-full bg-magical-turquoise hover:bg-magical-turquoise/90 text-white rounded-full font-bold">
                    Узнать больше
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="мультфильмы" className="py-20 px-4 bg-gradient-to-br from-magical-purple/10 to-magical-pink/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-magical-purple mb-4">
            Наши Мультфильмы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Анимационные истории с вашими любимыми героями
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Волшебный День Рождения', duration: '5 мин' },
              { title: 'Приключения Супергероя', duration: '7 мин' },
              { title: 'Путешествие в Страну Мечты', duration: '6 мин' }
            ].map((cartoon, idx) => (
              <Card key={idx} className="overflow-hidden bg-white rounded-3xl border-2 border-magical-pink/30 hover:shadow-2xl transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="aspect-video bg-gradient-to-br from-magical-turquoise/40 to-magical-purple/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Play" size={36} className="text-magical-purple ml-1" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-magical-pink/20 text-magical-pink px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {cartoon.duration}
                  </div>
                  <h3 className="text-xl font-heading text-magical-purple">{cartoon.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-magical-purple mb-4">
            Галерея Волшебства
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <Card key={idx} className="overflow-hidden bg-white rounded-3xl border-2 border-magical-yellow/30 hover:shadow-2xl transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block bg-magical-purple/20 text-magical-purple px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {story.age}
                  </div>
                  <h3 className="text-lg font-heading text-magical-purple mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm">{story.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="заказать" className="py-20 px-4 bg-gradient-to-br from-magical-yellow/20 via-magical-pink/20 to-magical-purple/20">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-magical-pink/30 animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-heading text-center text-magical-purple mb-4">
              Заказать Сказку
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Создайте уникальную историю для вашего ребёнка
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Имя ребёнка
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Например: Маша"
                  className="rounded-2xl border-2 border-magical-purple/30 focus:border-magical-purple"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Возраст
                </label>
                <Input
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Например: 5 лет"
                  className="rounded-2xl border-2 border-magical-purple/30 focus:border-magical-purple"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  О чём мечтает ваш ребёнок?
                </label>
                <Textarea
                  value={formData.preferences}
                  onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                  placeholder="Расскажите о любимых героях, интересах, мечтах..."
                  rows={4}
                  className="rounded-2xl border-2 border-magical-purple/30 focus:border-magical-purple"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email для связи
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="rounded-2xl border-2 border-magical-purple/30 focus:border-magical-purple"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-magical-pink hover:bg-magical-pink/90 text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Создать волшебство
                <Icon name="Wand2" className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-magical-purple mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Готовы ответить на все ваши вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: 'Mail', text: 'info@magical-stories.com', color: 'magical-pink' },
              { icon: 'Phone', text: '+7 (999) 123-45-67', color: 'magical-purple' },
              { icon: 'MapPin', text: 'Москва, Сказочная улица, 123', color: 'magical-turquoise' }
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg border-2 border-magical-yellow/30 animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className={`w-10 h-10 bg-${contact.color}/20 rounded-full flex items-center justify-center`}>
                  <Icon name={contact.icon as any} size={20} className={`text-${contact.color}`} />
                </div>
                <span className="font-semibold text-gray-700">{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-magical-purple/10 py-8 px-4 border-t-2 border-magical-pink/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600">
            © 2024 Волшебные Сказки. Создаём мечты для детей ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;