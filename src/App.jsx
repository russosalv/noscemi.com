import { useState, useEffect } from 'react';
import quizQuestions from './quizQuestions.json';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const isCorrect = selectedAnswer ? selectedAnswer.isCorrect : false;

  useEffect(() => {
    // Scegli una domanda a caso all'avvio
    const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    setCurrentQuestion(randomQuestion);
    // Resetta lo stato quando la domanda cambia
    setSelectedAnswer(null);
    setShowResult(false);
  }, []); // L'array vuoto assicura che questo effetto venga eseguito solo al mount

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer) {
      setShowResult(true);
    } else {
      alert('Devi selezionare una risposta prima di verificare!');
    }
  };
  
  // Aggiungo un fallback nel caso in cui la domanda non sia ancora stata caricata
  if (!currentQuestion) {
    return <div>Caricamento...</div>;
  }

  return (
    <>
      <h1>noscemi</h1>
      <p>
        Per favore, non farmi perdere tempo in chat.
      </p>

      <p>
        Come un "ciao" senza seguito, anche una domanda posta male, vaga o
        sconsiderata blocca il flusso di lavoro e dimostra una totale mancanza
        di rispetto per il tempo altrui. Il tuo collega dovrà sprecare energie
        per capire cosa vuoi, invece di poterti aiutare subito.
      </p>

      <h2>Non fare così:</h2>
      <div className="chat-container">
        <div className="message">
          <div className="avatar">P</div>
          <div className="message-content">
            Ciao, posso chiederti una cosa? Il deploy non funziona.
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            Certo, che errore ti dà?
          </div>
        </div>
         <div className="message">
          <div className="avatar">P</div>
          <div className="message-content">
            Non lo so, mi dà errore e basta. Puoi guardare tu?
          </div>
        </div>
      </div>
      <p>
        <strong>Sei il problema.</strong> Stai chiedendo a qualcun altro non
        solo di risolverti un problema, ma anche di fare il lavoro investigativo
        che spettava a te. Hai interrotto il suo lavoro per una richiesta che
        non contiene nessuna informazione utile.
      </p>

      <div className="chat-container">
        <div className="message">
          <div className="avatar">R</div>
          <div className="message-content">
            Ehi, come si fa a centrare un div?
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            ...
          </div>
        </div>
      </div>
      <p>
        <strong>Pigrizia pura.</strong> Una ricerca su Google di 10 secondi ti avrebbe dato la risposta. Se hai già cercato e hai un problema specifico (es. "Ho provato con flexbox ma non funziona su Safari"), allora la domanda è lecita, ma devi fornire il contesto.
      </p>

      <div className="chat-container">
        <div className="message">
          <div className="avatar">S</div>
          <div className="message-content">
            URGENTE!!! IL SITO È ROTTO!!!
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            Ok... quale sito? Cosa significa "rotto"? Hai un link o uno screenshot dell'errore?
          </div>
        </div>
        <div className="message">
          <div className="avatar">S</div>
          <div className="message-content">
            Non lo so, me l'ha detto un cliente! RISOLVI SUBITO!
          </div>
        </div>
      </div>
      <p>
        <strong>L'urgenza non giustifica la vaghezza.</strong> Anzi, più una cosa è urgente, più devi essere preciso per permettere agli altri di aiutarti velocemente. Altrimenti l'unica cosa urgente è la tua incapacità di comunicare.
      </p>

      <div className="chat-container">
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Questa stima è troppo alta. Dobbiamo ridurla del 30% per farla rientrare nel budget.
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            Ok, per abbassare la stima dobbiamo ridurre le funzionalità. Quali possiamo togliere?
          </div>
        </div>
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Nessuna, serve tutto. Trovate un modo per farlo.
          </div>
        </div>
      </div>
      <p>
        <strong>Il triangolo impossibile.</strong> Tempo, costi e qualità sono legati. Non puoi pretendere di ridurre tempo e costi senza ridurre l'ambito o sacrificare la qualità. Le stime non sono un menù alla carta. Chiedere di abbassarle senza un compromesso è una fantasia, non management.
      </p>

      <div className="chat-container">
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Ciao, ho bisogno che questa nuova feature sia online per ieri. È una richiesta super urgente del CEO.
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            Ricevuto. Per gestire questa urgenza dobbiamo ripianificare le attività correnti. Su quale progetto mi autorizzi a fermare i lavori?
          </div>
        </div>
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Non importa, trovate un modo per farlo più in fretta. È la priorità assoluta.
          </div>
        </div>
      </div>
      <p>
        <strong>La macchina del tempo non esiste.</strong> L'urgenza improvvisa causata da una cattiva pianificazione a monte non è un problema del team di sviluppo. Le richieste "per ieri" creano solo caos, stress, errori e debito tecnico. Una buona gestione pianifica, non reagisce scaricando il panico sugli altri.
      </p>

      <div className="chat-container">
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Ciao, entra subito in questa call con il cliente: [link-call]
          </div>
        </div>
        <div className="message">
          <div className="avatar">T</div>
          <div className="message-content">
            Arrivo. Di che si tratta, così mi preparo?
          </div>
        </div>
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Entra e basta, è urgente.
          </div>
        </div>
      </div>
      <p>
        <strong>Non sono Frate Indovino.</strong> Trascinare qualcuno in una riunione o su un'attività senza il minimo contesto è la ricetta perfetta per perdere tempo. La persona chiamata in causa non ha modo di prepararsi, recuperare informazioni o pensare a una soluzione. L'urgenza non è una scusa per l'improvvisazione.
      </p>

      <h2>Fai così:</h2>
       <div className="chat-container">
        <div className="message">
          <div className="avatar">P</div>
          <div className="message-content">
            Ciao! Sto avendo problemi con il deploy del servizio X sul branch Y. Ricevo un errore 502 Bad Gateway. Ho già controllato i log dell'applicazione e sembra che il container non riesca a partire. Ho provato a riavviarlo manualmente ma senza successo. Hai qualche idea su cosa potrei controllare? Qui trovi il link al log completo: [link]
          </div>
        </div>
      </div>
      <div className="chat-container">
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Ok, la stima per questa feature è più alta del budget che abbiamo. Possiamo rivedere lo scope insieme per capire quali funzionalità sono essenziali per una prima versione e quali possiamo rimandare? Vorrei trovare un modo per rilasciare valore rimanendo nel budget.
          </div>
        </div>
      </div>
      <div className="chat-container">
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-content">
            Ciao! Appena hai 10 minuti, potresti entrare in questa call per un'urgenza sul Progetto X? Il cliente Y segnala un errore nel checkout. Ti ho già inviato via mail il ticket con tutti i dettagli e i log, così puoi arrivare preparato.
          </div>
        </div>
      </div>
      <p>
        <strong>Questa è una richiesta che si rispetta.</strong> Fornisci
        contesto, dimostri di aver già analizzato il problema e permetti alla
        persona di aiutarti in modo efficiente, senza dover fare domande
triviale
      </p>
      
      <p>
        L'obiettivo è sbloccare la comunicazione asincrona. Se poni una domanda
        completa e informativa, l'altra persona può pensarci e risponderti
        appena ha un momento libero, senza interrompere quello che sta facendo.
      </p>

      <div className="quiz-container">
        <h2>Mettiti alla prova</h2>
        <p>Hai capito come non essere uno scemo? Verifica le tue conoscenze.</p>
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>{currentQuestion.question}</legend>
            {currentQuestion.answers.map((answer, index) => (
              <div className="quiz-option" key={index}>
                <input 
                  type="radio" 
                  id={`q-a${index}`} 
                  name="quiz" 
                  value={index} 
                  onChange={() => setSelectedAnswer(answer)} 
                />
                <label htmlFor={`q-a${index}`}>{answer.text}</label>
              </div>
            ))}
          </fieldset>
          <button type="submit">Verifica la risposta</button>
        </form>
        {showResult && (
          <div className="result-message">
            {isCorrect ? (
              <p className="success">Bravo! Hai capito. Forse puoi contattarmi.</p>
            ) : (
              <p className="error">Vedi? Anche tu sei scemo.</p>
            )}
          </div>
        )}
      </div>

      <footer>
        Ispirato (molto alla lontana) da{" "}
        <a href="https://nohello.net" target="_blank" rel="noopener noreferrer">
          nohello.net
        </a>
        . Creato con frustrazione da un developer.
      </footer>
    </>
  )
}

export default App
