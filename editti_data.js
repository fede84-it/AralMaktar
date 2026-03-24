// ── EDITTI DATA ──
// Aggiungi nuovi editti IN CIMA all'array (il primo è il più recente).
// La home mostra automaticamente i primi 3.
var EDITTI = [
  {
    titolo: "Sulla Restaurazione dell'Acquedotto Imperiale e l'Approvvigionamento Idrico",
    data: "Aral Maktar — 582 DE",
    corpo: [
      { tipo: "drop-cap", testo: "Noi, Raziel Firelair, Re di Aral Maktar e Protettore delle Terre di Landmar, avendo preso visione delle condizioni in cui versa l'antico Acquedotto Imperiale, danneggiato durante l'Era del Caos e da allora mai pienamente ripristinato, e considerato che l'acqua pulita è diritto inalienabile di ogni suddito della Corona, decretiamo quanto segue:" },
      { tipo: "ol", voci: [
        "È istituita una Commissione Straordinaria per la Restaurazione dell'Acquedotto, posta sotto la supervisione congiunta della Gilda delle Arti e dei Mestieri e dell'Accademia delle Arti e delle Scienze.",
        "La Corona stanzia i fondi necessari al ripristino completo della condotta principale e delle fontane pubbliche dei quartieri del Porto, del Mercato e della Cala. I lavori avranno inizio entro trenta giorni dalla promulgazione del presente editto.",
        "Per tutta la durata dei lavori, i Dragoni Imperiali garantiranno la scorta e la distribuzione di acqua potabile nei quartieri interessati, mediante cisterne posizionate nelle piazze principali.",
        "Chiunque venga sorpreso a contaminare, deviare o danneggiare le condotte idriche sarà deferito al Collegio dei Giudici e giudicato per crimine contro il popolo.",
        "Al termine della restaurazione, la manutenzione ordinaria dell'Acquedotto sarà affidata alla Gilda, con ispezioni trimestrali e rendicontazione alla Corona."
      ]},
      { tipo: "p", testo: "L'acqua che scorre è il sangue della città. Che Aral Maktar torni a dissetarsi dalle fontane dei suoi padri, e che nessun quartiere sia lasciato a languire nella sete." }
    ]
  },
  {
    titolo: "Sul Divieto di Commercio d'Armi Non Registrate",
    data: "Aral Maktar — 581 DE",
    corpo: [
      { tipo: "drop-cap", testo: "Per decreto della Corona e su raccomandazione unanime del Consiglio Cittadino, considerate le ripetute segnalazioni di traffici clandestini di armamenti nei quartieri bassi della città, e ritenuto che la sicurezza dei sudditi sia minacciata dalla circolazione incontrollata di armi al di fuori dei canali legittimi, si dispone quanto segue:" },
      { tipo: "ol", voci: [
        "Ogni armaiolo, fabbro o mercante che commerci in armi da taglio, da punta, da botta o da lancio è tenuto a registrarsi presso la Gilda delle Arti e dei Mestieri e a tenere un libro contabile di ogni pezzo venduto, con il nome dell'acquirente e la data della transazione.",
        "La vendita di armi a individui non identificati, a stranieri privi di salvacondotto o a chiunque sia sottoposto a giudizio del Collegio è severamente proibita. I trasgressori saranno privati della licenza e deferiti alla giustizia.",
        "I Dragoni Imperiali sono autorizzati a condurre ispezioni presso le botteghe e i magazzini degli armaioli senza preavviso, al fine di verificare la corrispondenza tra i registri e le giacenze.",
        "Ogni arma confiscata durante operazioni di ordine pubblico che non risulti registrata sarà distrutta nelle fucine della Corona."
      ]},
      { tipo: "p", testo: "Il diritto del cittadino a difendere sé stesso e la propria famiglia non è in discussione. Ma un'arma senza nome è un'arma senza padrone, e ciò che non ha padrone appartiene al Caos." }
    ]
  },
  {
    titolo: "Sulla Riapertura della Biblioteca dell'Accademia",
    data: "Aral Maktar — 580 DE",
    corpo: [
      { tipo: "drop-cap", testo: "Noi, Raziel Firelair, Re di Aral Maktar e Protettore delle Terre di Landmar, decretiamo con il presente editto la riapertura della Grande Biblioteca dell'Accademia delle Arti e delle Scienze, rimasta chiusa e sotto sigillo dalla fine dell'Era del Caos per ragioni di sicurezza pubblica." },
      { tipo: "p", testo: "Considerato che la conoscenza è pilastro fondante della nostra civiltà, e che troppo a lungo il sapere degli antichi è rimasto sepolto dietro porte sbarrate, disponiamo quanto segue:" },
      { tipo: "ol", voci: [
        "La Grande Biblioteca è dichiarata aperta a ogni cittadino di Aral Maktar e ad ogni viandante di buona condotta, dal sorgere del sole al tramonto, in ogni giorno della settimana.",
        "Il Rettore dell'Accademia è incaricato di nominare un corpo di custodi per la conservazione e la catalogazione dei tomi sopravvissuti.",
        "È fatto divieto assoluto di rimuovere volumi dalla Biblioteca senza esplicita autorizzazione scritta del Rettore. I trasgressori saranno giudicati dal Collegio.",
        "Una copia di ogni nuovo testo prodotto entro le mura di Aral dovrà essere consegnata alla Biblioteca entro trenta giorni dalla sua compilazione."
      ]},
      { tipo: "p", testo: "Che questo decreto sia letto nelle piazze e affisso alle porte delle Istituzioni. La luce del sapere torna a brillare su Aral Maktar." }
    ]
  },
  {
    titolo: "Sulla Costituzione del Corpo dei Messaggeri Reali",
    data: "Aral Maktar — 579 DE",
    corpo: [
      { tipo: "drop-cap", testo: "Sia noto a tutti i sudditi della Corona e ai popoli amici delle terre di Landmar che, con il presente decreto, viene istituito il Corpo dei Messaggeri Reali di Aral Maktar, affinché la parola del Re e le disposizioni del Consiglio Cittadino possano giungere rapide e sicure in ogni angolo del Regno." },
      { tipo: "p", testo: "Troppo a lungo le comunicazioni tra la capitale e le terre circostanti sono state affidate a viandanti di passaggio e mercanti compiacenti. L'ordine e la giustizia esigono una voce certa. Pertanto disponiamo:" },
      { tipo: "ol", voci: [
        "Il Corpo dei Messaggeri Reali è posto sotto il comando diretto della Corona e opera in coordinamento con i Dragoni Imperiali. I suoi membri godono di immunità durante l'esercizio delle proprie funzioni e il loro ostacolo è considerato affronto al Re.",
        "Sono istituite stazioni di cambio cavalli lungo le vie principali che collegano Aral Maktar alla Cala di Sendar e ai villaggi delle terre di confine, con l'obbligo per ogni locanda lungo il percorso di fornire ristoro e cavalcature fresche ai Messaggeri dietro compenso della Corona.",
        "Ogni messaggio recante il sigillo reale ha priorità assoluta alle porte della città e ai posti di controllo. Nessuna guardia, gabelliere o funzionario potrà ritardarne il transito."
      ]},
      { tipo: "p", testo: "Che la voce di Aral Maktar risuoni lontano e che nessuna distanza possa più separare il Re dal suo popolo. Chi porta il sigillo, porta la parola del trono." }
    ]
  },
  {
    titolo: "Sull'Incoronazione e la Proclamazione del Nuovo Regno",
    data: "Aral Maktar — 578 DE",
    corpo: [
      { tipo: "drop-cap", testo: "Al popolo di Aral Maktar, ai signori delle terre di Landmar, ai rappresentanti delle Gilde, delle Istituzioni e dei Culti, e a tutti coloro che riconoscono la legge di Alisard quale fondamento dell'ordine civile: con il presente atto solenne proclamiamo l'inizio di una nuova era per la nostra amata città." },
      { tipo: "p", testo: "Dopo i lunghi anni del Caos, in cui Aral Maktar ha conosciuto il dolore della guerra, la vergogna del tradimento e l'oscurità dell'assenza di una guida, il trono non è più vacante. Per volontà del Collegio dei Giudici, per acclamazione dei Dragoni Imperiali e con la benedizione del Tempio di Alisard, decretiamo quanto segue:" },
      { tipo: "ol", voci: [
        "Il giorno della nostra incoronazione è dichiarato festa perpetua della città, in memoria della fine dell'Era del Caos e dell'inizio del nuovo Regno.",
        "Ogni debito contratto dai cittadini di Aral durante gli anni del Caos con la Corona è condonato. Si riparte da zero, come la città stessa.",
        "Il Consiglio Cittadino è ricostituito con nuove nomine, affinché ogni Istituzione abbia voce nelle decisioni che riguardano il futuro di Aral."
      ]},
      { tipo: "p", testo: "Che le campane suonino, che i fuochi ardano sulle torri: Aral Maktar ha di nuovo un Re, e il Re appartiene alla sua città." }
    ]
  }
];
