import React, { useState } from 'react';
import { 
  UserCircle2, 
  BookOpen, 
  LineChart, 
  FileText, 
  Video, 
  Mail, 
  GraduationCap,
  Target,
  ClipboardList,
  BookCheck,
  Menu,
  X,
  Download,
  Upload,
  Grid,
  List,
  Eye,
  MessageSquare,
  Calendar,
  Clock,
  Send,
  Plus
} from 'lucide-react';

type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
};

type ViewMode = 'grid' | 'list';

type ForumPost = {
  id: number;
  author: string;
  title: string;
  content: string;
  date: string;
  replies: number;
  course: string;
};

type ScheduleEvent = {
  id: number;
  title: string;
  time: string;
  course: string;
  type: 'class' | 'practice' | 'exam';
  room: string;
};

function App() {
  const [selectedSection, setSelectedSection] = useState<string>('schedule');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());

  // Sample forum posts
  const forumPosts: ForumPost[] = [
    {
      id: 1,
      author: "Victor Cañola",
      title: "Bienvenidos al curso de Programación de Software",
      content: "Información importante sobre el inicio del curso...",
      date: "2024-03-15",
      replies: 12,
      course: "10-1"
    },
    {
      id: 2,
      author: "Estudiante 10-1",
      title: "Dudas sobre el proyecto final",
      content: "Tengo algunas preguntas sobre los requerimientos...",
      date: "2024-03-14",
      replies: 5,
      course: "10-1"
    },
    {
      id: 3,
      author: "Victor Cañola",
      title: "Recursos de Preprensa Digital",
      content: "Enlaces útiles para el módulo de diseño...",
      date: "2024-03-13",
      replies: 8,
      course: "10-2"
    }
  ];

  // Sample schedule events
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: 1,
      title: "Programación de Software",
      time: "7:00 AM - 9:00 AM",
      course: "10-1",
      type: "class",
      room: "Lab 201"
    },
    {
      id: 2,
      title: "Preprensa Digital",
      time: "9:30 AM - 11:30 AM",
      course: "10-2",
      type: "practice",
      room: "Lab 202"
    },
    {
      id: 3,
      title: "Desarrollo Web Avanzado",
      time: "1:00 PM - 3:00 PM",
      course: "11-1",
      type: "class",
      room: "Lab 201"
    },
    {
      id: 4,
      title: "Diseño Editorial",
      time: "3:30 PM - 5:30 PM",
      course: "11-2",
      type: "practice",
      room: "Lab 202"
    }
  ];

  const sections: Section[] = [
    { id: 'schedule', title: 'Horario', icon: <Calendar />, color: 'bg-violet-500' },
    { id: 'forum', title: 'Foro', icon: <MessageSquare />, color: 'bg-emerald-500' },
    { id: 'curriculum', title: 'Currículo', icon: <BookOpen />, color: 'bg-blue-500' },
    { id: 'improvement', title: 'Planes de Mejoramiento', icon: <Target />, color: 'bg-green-500' },
    { id: 'activities', title: 'Actividades', icon: <ClipboardList />, color: 'bg-purple-500' },
    { id: 'indicators', title: 'Indicadores', icon: <LineChart />, color: 'bg-yellow-500' },
    { id: 'modules', title: 'Módulos', icon: <BookCheck />, color: 'bg-pink-500' },
    { id: 'study-plan', title: 'Plan de Estudios', icon: <GraduationCap />, color: 'bg-indigo-500' },
    { id: 'project', title: 'Proyecto Propio', icon: <FileText />, color: 'bg-red-500' },
    { id: 'tests', title: 'Pruebas de Período', icon: <ClipboardList />, color: 'bg-orange-500' },
    { id: 'circulars', title: 'Circulares', icon: <Mail />, color: 'bg-teal-500' },
    { id: 'videos', title: 'Videos', icon: <Video />, color: 'bg-cyan-500' }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };

  const renderSchedule = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentDate = new Date();
    
    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Marzo 2024</h3>
            <div className="flex space-x-2">
              <button className="p-2 rounded-lg bg-violet-100 text-violet-600">
                <Clock className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-violet-100 text-violet-600">
                <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-4 mb-6">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                  ${day === selectedDay 
                    ? 'bg-violet-600 text-white' 
                    : day === currentDate.getDate()
                      ? 'bg-violet-100 text-violet-600'
                      : 'bg-gray-100 text-gray-600'
                  } hover:bg-violet-500 hover:text-white transition-colors`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {scheduleEvents.map(event => (
              <div key={event.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-violet-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.time}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs font-medium bg-violet-100 text-violet-600 px-2 py-1 rounded">
                        {event.course}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {event.room}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${event.type === 'class' ? 'bg-green-100 text-green-600' :
                      event.type === 'practice' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'}`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderForum = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-lg font-medium">
              Todos los cursos
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-emerald-50">
              10-1 Programación
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-emerald-50">
              11-1 Programación
            </button>
          </div>
          <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Nuevo Tema</span>
          </button>
        </div>

        <div className="space-y-4">
          {forumPosts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <UserCircle2 className="h-10 w-10 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                  {post.course}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-500">
                  <MessageSquare className="h-5 w-5" />
                  <span>{post.replies} respuestas</span>
                </div>
                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                  <Send className="h-5 w-5" />
                  <span>Responder</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDocumentCard = (title: string, type: string, date: string) => {
    if (viewMode === 'grid') {
      return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <FileText className="h-8 w-8 text-indigo-600" />
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Eye className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{type}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      );
    }

    return (
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FileText className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{type}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Eye className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'schedule':
        return renderSchedule();
      case 'forum':
        return renderForum();
      case 'curriculum':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <label className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                <Upload className="h-5 w-5" />
                <span>Subir Documento</span>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {renderDocumentCard('Guía Didáctica 2024', 'PDF', 'Actualizado: 15 Mar 2024')}
              {renderDocumentCard('Planificación Anual', 'DOCX', 'Actualizado: 10 Mar 2024')}
              {renderDocumentCard('Objetivos del Curso', 'PDF', 'Actualizado: 5 Mar 2024')}
              {renderDocumentCard('Material de Apoyo', 'PDF', 'Actualizado: 1 Mar 2024')}
              {renderDocumentCard('Cronograma', 'XLSX', 'Actualizado: 28 Feb 2024')}
              {renderDocumentCard('Recursos Adicionales', 'ZIP', 'Actualizado: 25 Feb 2024')}
            </div>
          </div>
        );

      case 'improvement':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <label className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
                <Upload className="h-5 w-5" />
                <span>Subir Plan</span>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {renderDocumentCard('Plan de Mejora - Matemáticas', 'PDF', 'Fecha límite: 30 Mar 2024')}
              {renderDocumentCard('Plan de Mejora - Lenguaje', 'PDF', 'Fecha límite: 2 Abr 2024')}
              {renderDocumentCard('Recursos de Apoyo', 'ZIP', 'Actualizado: 15 Mar 2024')}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <label className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                <Upload className="h-5 w-5" />
                <span>Entregar Actividad</span>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {['Tarea 1', 'Proyecto Grupal', 'Investigación', 'Presentación'].map((activity) => (
                <div key={activity} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{activity}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Fecha de entrega: 15 de Abril</p>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-500 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-sm text-gray-500">Progreso: 75%</p>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Continuar
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors border border-gray-200 rounded-lg">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'indicators':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <button className="flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                <Download className="h-5 w-5" />
                <span>Exportar Reporte</span>
              </button>
            </div>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {['Asistencia', 'Rendimiento', 'Participación'].map((indicator) => (
                <div key={indicator} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{indicator}</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                          Progreso
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-yellow-600">
                          90%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                      <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                    </div>
                    <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                      <Download className="h-5 w-5" />
                      <span>Descargar Detalles</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Sección en Desarrollo</h3>
            <p className="text-gray-600">Esta sección estará disponible próximamente.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-lg shadow-lg"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          w-64 bg-white shadow-xl
        `}>
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <UserCircle2 className="h-8 w-8 text-indigo-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">I.E. Héctor Abad Gómez</h1>
                <p className="text-sm text-gray-600">Media Técnica</p>
                <p className="text-xs text-gray-500">Prof. Victor Cañola</p>
              </div>
            </div>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setSelectedSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${selectedSection === section.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                {sections.find(s => s.id === selectedSection)?.title}
              </h2>
              <p className="text-gray-600">
                Programación de Software (10-1, 11-1) | Preprensa Digital (10-2, 11-2)
              </p>
            </header>
            
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;