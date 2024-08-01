import './App.css';
import imgIntroducao from './assets/image-introducao.webp';
import imgCarreira from './assets/image-carreira.webp';

function App() {
  return (
    <div className="App">
      <div id="#topo"></div>
      <header className="App-header">
        <a href='#topo'>Game Developer</a>
        <ol class="nav-list">
          <li><a href="#introducao">Introdução</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#carreira">Oportunidades de carreira</a></li>
          <li><a href="#ferramentas">Ferramentas</a></li>
        </ol>
      </header>
      <section class="introducao" id='#introducao'>
      <article class="text-introducao">
        <h1>O que faz um Desenvolvedor de Jogos:</h1>
        <p class="text">
          Game Developer ou Desenvolvedor de jogos é o profissional que desenvolve as instruções lógicas de jogos digitais. Suas atividades envolvem escrever, testar e manter aplicações de jogos, que demandam recursos audiovisuais avançados.
          O profissional dessa área trabalha com jogos para console, computador, celular e navegadores. É sua tarefa dar vida aos jogos a partir do roteiro, dos desenhos e da mecânica desenvolvidos no planejamento do projeto.
        </p>
      </article>
        <article class="img-introducao">
          <img src={imgIntroducao} width="100%"/>
        </article>
      </section>
      <section class="habilidades" id="#habilidades">
      <article class="habilidadesOne">
        <h1>Habilidades de um game developer no dia a dia:</h1>
        <ol>
          <li>Escrever códigos de jogos digitais</li>
          <li>Especificar requisitos de sistema</li>
          <li>Realizar testes de games</li>
          <li>Realizar a manutenção de jogos</li>
        </ol>
      </article>
      <article class="habilidadesTwo">
        <h1>O que é necessário estudar para ser desenvolvedor de jogos:</h1>
        <ol>
          <li>Linguagens de programação (C++, C# etc.)</li>
          <li>Plataformas de game engine</li>
          <li>User Experience (UX)</li>
        </ol>
      </article>
      </section>
      <section class="carreira" id='#carreira'>
        <article class="img-carreira">
          <img src={imgCarreira} width="100%"/>
        </article>
      <article class="text-carreira">
        <h1>Oportunidades de carreira:</h1>
        <ol>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Freelancer</li>
          <li>Empresas Pequenas</li>
          <li>Empresas Internacionais</li>
        </ol>
      </article>
      </section>
      <section class="ferramentas" id="#ferramentas">
      <article class="ferramentasOne">
        <h1>Ferramentas:</h1>
      </article>
      <article class="ferramentasTwo">
        <ol>
          <li>Blender</li>
          <li>Unity</li>
          <li>GameMaker</li>
          <li>Unreal Engine</li>
          <li>Construct</li>
          <li>Godot</li>
          <li class="ultimo">...</li>
        </ol>
      </article>
      </section>
    </div>
  );
}

export default App;
