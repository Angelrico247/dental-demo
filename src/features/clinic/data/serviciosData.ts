import { CategoriaServicio, Servicio } from "../types/clinic.types";

export const MOCK_SERVICIOS: Servicio[] = [
  {
    id: "s1",
    slug: "limpieza-dental",
    nombre: "Limpieza dental profesional",
    categoria: "preventiva",
    resumen: "Elimina sarro y manchas que el cepillo ya no alcanza.",
    descripcion:
      "La limpieza profesional retira el sarro que se acumula bajo la encía y en las zonas donde el cepillo no llega. Usamos ultrasonido para desprenderlo sin raspar el esmalte y terminamos con un pulido que deja la superficie lisa, lo que retrasa que el sarro vuelva a pegarse.\n\nEs el tratamiento más barato que existe y el que más problemas evita: la mayoría de las caries y de las enfermedades de encía que tratamos empezaron por saltarse una limpieza. Lo recomendable es hacerla cada seis meses.",
    beneficios: [
      "Previene caries y enfermedad de las encías",
      "Reduce el sangrado al cepillarte",
      "Elimina manchas de café, té y tabaco",
      "Mejora el mal aliento persistente",
    ],
    pasos: [
      { titulo: "Revisión inicial", detalle: "Valoramos encías, sarro visible y zonas de riesgo." },
      { titulo: "Ultrasonido", detalle: "Desprendemos el sarro supragingival y subgingival sin dañar el esmalte." },
      { titulo: "Pulido y flúor", detalle: "Pulimos la superficie y aplicamos flúor para reforzar el esmalte." },
      { titulo: "Instrucciones", detalle: "Te enseñamos la técnica de cepillado que tu caso necesita." },
    ],
    incluye: ["Revisión general", "Ultrasonido", "Pulido", "Aplicación de flúor"],
    duracionMinutos: 45,
    sesiones: 1,
    precioDesde: 800,
    imagenes: ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1400"],
    icono: "limpieza",
    destacado: true,
    doctoresIds: ["d6"],
    faq: [
      { id: "s1f1", pregunta: "¿Duele la limpieza?", respuesta: "Si tus encías están sanas, casi no se siente. Si hay inflamación puede molestar un poco; en ese caso aplicamos anestesia tópica sin costo." },
      { id: "s1f2", pregunta: "¿Cada cuánto debo hacerla?", respuesta: "Cada seis meses para la mayoría de las personas. Si fumas o tienes tendencia a formar sarro, cada cuatro." },
    ],
  },
  {
    id: "s2",
    slug: "tratamiento-de-encias",
    nombre: "Tratamiento de encías",
    categoria: "preventiva",
    resumen: "Para encías que sangran, se retraen o duelen.",
    descripcion:
      "Cuando el sarro lleva tiempo bajo la encía, esta se despega del diente y se forma una bolsa donde la bacteria vive tranquila. Eso es periodontitis, y es la causa número uno de pérdida de dientes en adultos, muy por encima de la caries.\n\nEl tratamiento consiste en limpiar esas bolsas por cuadrantes, con anestesia, y luego controlar la evolución cada tres meses hasta que la encía vuelva a pegarse. No es reversible del todo, pero sí se detiene.",
    beneficios: [
      "Detiene la pérdida de hueso alrededor del diente",
      "Elimina el sangrado y la inflamación",
      "Evita que los dientes se aflojen",
      "Mejora el pronóstico de cualquier tratamiento posterior",
    ],
    pasos: [
      { titulo: "Periodontograma", detalle: "Medimos la profundidad de cada bolsa y registramos el nivel de hueso." },
      { titulo: "Raspado por cuadrantes", detalle: "Limpieza profunda bajo anestesia, normalmente en dos citas." },
      { titulo: "Reevaluación", detalle: "A las seis semanas medimos de nuevo para confirmar la mejoría." },
      { titulo: "Mantenimiento", detalle: "Controles cada tres meses durante el primer año." },
    ],
    incluye: ["Periodontograma completo", "Raspado y alisado radicular", "Anestesia", "Cita de reevaluación"],
    duracionMinutos: 60,
    sesiones: 2,
    precioDesde: 2400,
    imagenes: ["https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1400"],
    icono: "encias",
    destacado: false,
    doctoresIds: ["d6"],
    faq: [
      { id: "s2f1", pregunta: "¿Me van a quedar los dientes más largos?", respuesta: "La encía inflamada se ve más voluminosa. Al desinflamarse puede parecer que el diente se alargó, pero es la encía volviendo a su posición real." },
      { id: "s2f2", pregunta: "¿Se cura del todo?", respuesta: "El hueso perdido no regresa, pero el proceso se detiene y no vuelves a perder más si mantienes los controles." },
    ],
  },
  {
    id: "s3",
    slug: "blanqueamiento-dental",
    nombre: "Blanqueamiento dental",
    categoria: "estetica",
    resumen: "Varios tonos más claro en una sola sesión de consultorio.",
    descripcion:
      "Aclaramos el color del diente con peróxido de hidrógeno activado por luz LED. En una sesión de 90 minutos se ganan entre tres y seis tonos, dependiendo del punto de partida y de qué manchó el diente en primer lugar.\n\nAntes de blanquear siempre hacemos limpieza: el peróxido no atraviesa el sarro y el resultado saldría disparejo. También revisamos que no haya caries ni encías inflamadas, porque el proceso las irritaría.",
    beneficios: [
      "Resultado visible el mismo día",
      "Aísla la encía para evitar quemaduras químicas",
      "Incluye férulas para mantenimiento en casa",
      "No desgasta el esmalte",
    ],
    pasos: [
      { titulo: "Limpieza previa", detalle: "Sin sarro el gel actúa parejo en toda la superficie." },
      { titulo: "Registro de tono", detalle: "Fotografiamos con guía de color para comparar el antes y el después." },
      { titulo: "Aislamiento y gel", detalle: "Protegemos la encía y aplicamos tres ciclos de peróxido con luz LED." },
      { titulo: "Férulas para casa", detalle: "Te llevas guardas a medida y gel para reforzar el resultado." },
    ],
    incluye: ["Limpieza previa", "Tres ciclos en consultorio", "Férulas a medida", "Gel de mantenimiento"],
    duracionMinutos: 90,
    sesiones: 1,
    precioDesde: 4500,
    imagenes: ["https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1400"],
    icono: "blanqueamiento",
    destacado: true,
    doctoresIds: ["d3"],
    faq: [
      { id: "s3f1", pregunta: "¿Me va a dar sensibilidad?", respuesta: "Es normal sentir sensibilidad al frío durante 24 a 48 horas. Se quita sola y te damos un gel desensibilizante." },
      { id: "s3f2", pregunta: "¿Funciona en resinas o coronas?", respuesta: "No. Los materiales artificiales no cambian de color, así que si tienes resinas visibles habrá que reemplazarlas después del blanqueamiento." },
    ],
  },
  {
    id: "s4",
    slug: "carillas-de-porcelana",
    nombre: "Carillas de porcelana",
    categoria: "estetica",
    resumen: "Rediseño de forma y color con desgaste mínimo.",
    descripcion:
      "Las carillas son láminas de porcelana de menos de un milímetro que se adhieren a la cara visible del diente. Sirven para corregir forma, color, pequeños espacios y desgastes, todo en el mismo tratamiento.\n\nTrabajamos con diseño digital: primero simulamos el resultado en pantalla y hacemos una prueba en boca con resina provisional. Solo cuando apruebas cómo se ve, tallamos. Esa prueba es lo que evita el clásico resultado de dientes que no se parecen a los tuyos.",
    beneficios: [
      "Diseño aprobado por ti antes de tocar el diente",
      "Desgaste mínimo, entre 0.3 y 0.7 mm",
      "La porcelana no se mancha con el tiempo",
      "Corrige color, forma y espacios a la vez",
    ],
    pasos: [
      { titulo: "Diseño digital", detalle: "Fotografías, video de sonrisa y simulación en pantalla." },
      { titulo: "Prueba en boca", detalle: "Colocamos un provisional de resina para que veas y apruebes la forma." },
      { titulo: "Tallado y escaneo", detalle: "Desgaste mínimo guiado por la prueba, escáner 3D y provisionales." },
      { titulo: "Cementado", detalle: "Probamos color en boca y adherimos las carillas definitivas." },
    ],
    incluye: ["Diseño digital de sonrisa", "Prueba estética", "Provisionales", "Carillas definitivas por diente"],
    duracionMinutos: 120,
    sesiones: 3,
    precioDesde: 9500,
    imagenes: ["https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400"],
    icono: "carillas",
    destacado: false,
    doctoresIds: ["d3"],
    faq: [
      { id: "s4f1", pregunta: "¿Cuánto duran?", respuesta: "Entre 10 y 15 años con buen cuidado. Lo que más las acorta es apretar los dientes de noche; si lo haces, la guarda es obligatoria." },
      { id: "s4f2", pregunta: "¿El precio es por diente?", respuesta: "Sí. La mayoría de los casos son de seis a ocho carillas superiores, y ahí manejamos precio de paquete." },
    ],
  },
  {
    id: "s5",
    slug: "ortodoncia-invisible",
    nombre: "Ortodoncia invisible",
    categoria: "ortodoncia",
    resumen: "Alineadores transparentes, removibles y prácticamente invisibles.",
    descripcion:
      "Una secuencia de alineadores de plástico transparente que mueven los dientes poco a poco. Cada juego se usa una o dos semanas y luego se cambia por el siguiente. Los traes 22 horas al día y te los quitas para comer y lavarte los dientes.\n\nAntes de empezar te mostramos la simulación completa del movimiento: ves cómo va a quedar tu boca al final y cuántos meses toma. La mayoría de los casos van de 8 a 18 meses.",
    beneficios: [
      "Prácticamente nadie los nota",
      "Te los quitas para comer, no hay alimentos prohibidos",
      "Menos citas de control que con brackets",
      "Ves el resultado simulado antes de empezar",
    ],
    pasos: [
      { titulo: "Escáner 3D", detalle: "Impresión digital de ambas arcadas, sin pastas." },
      { titulo: "Plan y simulación", detalle: "Te mostramos el movimiento completo y el tiempo estimado." },
      { titulo: "Entrega de alineadores", detalle: "Colocamos los aditamentos y te entregamos los primeros juegos." },
      { titulo: "Controles y retención", detalle: "Revisión cada 8 semanas y retenedores al terminar." },
    ],
    incluye: ["Escáner 3D", "Simulación del resultado", "Juego completo de alineadores", "Retenedores finales"],
    duracionMinutos: 60,
    sesiones: 8,
    precioDesde: 45000,
    imagenes: ["https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1400"],
    icono: "alineador",
    destacado: true,
    doctoresIds: ["d1"],
    faq: [
      { id: "s5f1", pregunta: "¿Sirve para casos complicados?", respuesta: "Hoy resuelven casi todo lo que resuelven los brackets. En mordidas muy severas a veces combinamos ambos por unos meses." },
      { id: "s5f2", pregunta: "¿Se nota al hablar?", respuesta: "Los primeros dos o tres días notas el plástico al pronunciar la S. Después el habla vuelve a la normalidad." },
    ],
  },
  {
    id: "s6",
    slug: "brackets-esteticos",
    nombre: "Brackets estéticos",
    categoria: "ortodoncia",
    resumen: "Brackets de cerámica del color del diente, mucho más discretos.",
    descripcion:
      "Misma mecánica que los brackets de siempre, pero con piezas de cerámica que se confunden con el color natural del diente. Son la opción cuando el caso necesita el control preciso de un aparato fijo pero no quieres el metal a la vista.\n\nSon más económicos que los alineadores y no dependen de que tú te acuerdes de traerlos puestos, lo cual los hace la mejor opción para adolescentes.",
    beneficios: [
      "Control preciso en movimientos complejos",
      "Mucho más discretos que el metal",
      "No dependen de la disciplina del paciente",
      "Alternativa más accesible que los alineadores",
    ],
    pasos: [
      { titulo: "Estudios", detalle: "Radiografías, fotografías y modelos digitales." },
      { titulo: "Colocación", detalle: "Cementamos los brackets y colocamos el primer arco." },
      { titulo: "Ajustes mensuales", detalle: "Cambio de arcos y ligas cada cuatro semanas." },
      { titulo: "Retiro y retención", detalle: "Retiramos, pulimos y entregamos retenedores." },
    ],
    incluye: ["Estudios de ortodoncia", "Brackets de cerámica", "Ajustes mensuales", "Retenedores finales"],
    duracionMinutos: 45,
    sesiones: 20,
    precioDesde: 28000,
    imagenes: ["https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1400"],
    icono: "brackets",
    destacado: false,
    doctoresIds: ["d1"],
    faq: [
      { id: "s6f1", pregunta: "¿Se manchan?", respuesta: "El bracket de cerámica no, pero las ligas transparentes sí se tiñen con café y curry. Se cambian en cada ajuste mensual." },
      { id: "s6f2", pregunta: "¿Cuánto dura el tratamiento?", respuesta: "Entre 18 y 24 meses en la mayoría de los casos." },
    ],
  },
  {
    id: "s7",
    slug: "implante-dental",
    nombre: "Implante dental",
    categoria: "implantologia",
    resumen: "Reemplaza un diente perdido sin tocar los de al lado.",
    descripcion:
      "Un implante es un tornillo de titanio que va dentro del hueso y hace de raíz. Sobre él se atornilla una corona de porcelana. A diferencia de un puente, no obliga a desgastar los dientes vecinos, y al transmitir la carga al hueso evita que este se reabsorba.\n\nPlanificamos cada caso con tomografía 3D y guía quirúrgica impresa, lo que hace la cirugía más corta y precisa. Entre la colocación y la corona definitiva pasan de tres a cuatro meses de integración.",
    beneficios: [
      "No desgasta los dientes vecinos",
      "Conserva el hueso de la zona",
      "Se siente y funciona como un diente propio",
      "Cirugía guiada, menos inflamación y menos tiempo",
    ],
    pasos: [
      { titulo: "Tomografía 3D", detalle: "Medimos altura y grosor de hueso, y ubicamos el nervio." },
      { titulo: "Cirugía guiada", detalle: "Colocación del implante con férula impresa, unos 40 minutos." },
      { titulo: "Osteointegración", detalle: "Tres a cuatro meses para que el hueso se fusione al titanio." },
      { titulo: "Corona definitiva", detalle: "Escaneamos y atornillamos la corona de porcelana." },
    ],
    incluye: ["Tomografía", "Guía quirúrgica", "Implante de titanio", "Corona de porcelana"],
    duracionMinutos: 90,
    sesiones: 3,
    precioDesde: 18000,
    imagenes: ["https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1400"],
    icono: "implante",
    destacado: true,
    doctoresIds: ["d2"],
    faq: [
      { id: "s7f1", pregunta: "¿Duele la cirugía?", respuesta: "Durante no, va con anestesia local. La molestia posterior suele ser menor que la de una extracción y se controla con antiinflamatorio dos o tres días." },
      { id: "s7f2", pregunta: "¿Y si no tengo suficiente hueso?", respuesta: "Se puede injertar. Lo vemos en la tomografía desde la primera valoración y te lo decimos antes de cotizar." },
    ],
  },
  {
    id: "s8",
    slug: "rehabilitacion-all-on-4",
    nombre: "Rehabilitación All-on-4",
    categoria: "implantologia",
    resumen: "Arcada completa fija sobre cuatro implantes, en un día.",
    descripcion:
      "Para pacientes que perdieron todos los dientes de una arcada o que traen una dentadura removible que ya no tolera. Se colocan cuatro implantes en posiciones estratégicas y sobre ellos se atornilla una prótesis fija completa.\n\nLa gran diferencia con la dentadura tradicional es que no se quita, no se mueve al hablar y permite morder con fuerza normal. En la mayoría de los casos sales el mismo día con dientes provisionales fijos.",
    beneficios: [
      "Prótesis fija, no removible",
      "Dientes provisionales el mismo día",
      "Solo cuatro implantes por arcada",
      "Recupera fuerza de mordida casi normal",
    ],
    pasos: [
      { titulo: "Estudio integral", detalle: "Tomografía, fotografías y planificación de la nueva mordida." },
      { titulo: "Cirugía", detalle: "Extracciones si hacen falta y colocación de los cuatro implantes." },
      { titulo: "Provisional inmediato", detalle: "Atornillamos una prótesis fija provisional el mismo día." },
      { titulo: "Prótesis definitiva", detalle: "A los cuatro meses colocamos la definitiva en titanio y porcelana." },
    ],
    incluye: ["Estudio y planificación", "Cuatro implantes", "Prótesis provisional fija", "Prótesis definitiva"],
    duracionMinutos: 240,
    sesiones: 4,
    precioDesde: 120000,
    imagenes: ["https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1400"],
    icono: "arcada",
    destacado: false,
    doctoresIds: ["d2"],
    faq: [
      { id: "s8f1", pregunta: "¿Realmente salgo con dientes el mismo día?", respuesta: "En la mayoría de los casos sí, con una prótesis provisional fija. Depende de que el hueso permita fijar bien los implantes desde el inicio." },
      { id: "s8f2", pregunta: "¿El precio es por arcada?", respuesta: "Sí, e incluye implantes, provisional y prótesis definitiva de esa arcada." },
    ],
  },
  {
    id: "s9",
    slug: "endodoncia",
    nombre: "Endodoncia",
    categoria: "endodoncia",
    resumen: "Salva el diente cuando el nervio ya está dañado.",
    descripcion:
      "Cuando la caries llega al nervio o un golpe lo mata, el diente empieza a doler y a infectarse. La endodoncia retira ese tejido, desinfecta los conductos y los sella. El diente se queda en su lugar y sigue funcionando.\n\nTrabajamos con microscopio, que es lo que permite encontrar conductos accesorios que se escapan a simple vista. Esa es la razón principal por la que una endodoncia falla años después, y por la que la mayoría de nuestros casos se resuelven en una sola cita.",
    beneficios: [
      "Conserva tu diente natural",
      "Quita el dolor desde la primera sesión",
      "Microscopio: menos riesgo de conductos sin tratar",
      "La mayoría se resuelve en una sola cita",
    ],
    pasos: [
      { titulo: "Diagnóstico", detalle: "Radiografía y pruebas de vitalidad para confirmar el estado del nervio." },
      { titulo: "Anestesia y aislamiento", detalle: "Colocamos dique de goma para trabajar en campo estéril." },
      { titulo: "Limpieza de conductos", detalle: "Instrumentación con microscopio y desinfección." },
      { titulo: "Sellado y corona", detalle: "Obturamos los conductos y planeamos la corona de protección." },
    ],
    incluye: ["Radiografías", "Anestesia", "Tratamiento de conductos", "Obturación provisional"],
    duracionMinutos: 90,
    sesiones: 1,
    precioDesde: 3800,
    imagenes: ["https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1400"],
    icono: "endodoncia",
    destacado: true,
    doctoresIds: ["d4"],
    faq: [
      { id: "s9f1", pregunta: "¿Duele?", respuesta: "La fama viene de cuando la anestesia no era lo que es hoy. Con el diente anestesiado no se siente; lo que dolía era la infección previa." },
      { id: "s9f2", pregunta: "¿Necesito corona después?", respuesta: "En muelas sí, casi siempre: el diente queda más frágil y una corona evita que se fracture. Se cotiza aparte." },
    ],
  },
  {
    id: "s10",
    slug: "retratamiento-endodontico",
    nombre: "Retratamiento de conductos",
    categoria: "endodoncia",
    resumen: "Segunda oportunidad para un diente con endodoncia fallida.",
    descripcion:
      "Si un diente tratado hace años vuelve a doler o aparece una lesión en la radiografía, no siempre hay que extraerlo. El retratamiento consiste en retirar el material anterior, encontrar lo que quedó sin limpiar y volver a sellar.\n\nEs un procedimiento más largo y delicado que la endodoncia inicial, y aquí el microscopio deja de ser un lujo para ser indispensable. La tasa de éxito ronda el 80% cuando la raíz sigue íntegra.",
    beneficios: [
      "Evita la extracción y el costo de un implante",
      "Localiza conductos que quedaron sin tratar",
      "Retira material antiguo y postes si es necesario",
      "Resuelve infecciones persistentes",
    ],
    pasos: [
      { titulo: "Valoración", detalle: "Radiografía o tomografía para ver qué falló." },
      { titulo: "Desobturación", detalle: "Retiramos el material y los postes previos." },
      { titulo: "Relimpieza", detalle: "Localizamos conductos no tratados y desinfectamos con microscopio." },
      { titulo: "Sellado definitivo", detalle: "Obturamos y coordinamos la restauración final." },
    ],
    incluye: ["Estudio radiográfico", "Retiro de material previo", "Relimpieza con microscopio", "Sellado"],
    duracionMinutos: 120,
    sesiones: 2,
    precioDesde: 5200,
    imagenes: ["https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1400"],
    icono: "retratamiento",
    destacado: false,
    doctoresIds: ["d4"],
    faq: [
      { id: "s10f1", pregunta: "¿Vale la pena o mejor un implante?", respuesta: "Si la raíz está íntegra, conservar tu diente casi siempre es mejor y más barato. Te damos el pronóstico honesto en la valoración." },
      { id: "s10f2", pregunta: "¿Cuántas citas son?", respuesta: "Normalmente dos, separadas por una o dos semanas con medicación dentro del conducto." },
    ],
  },
  {
    id: "s11",
    slug: "primera-visita-infantil",
    nombre: "Primera visita infantil",
    categoria: "odontopediatria",
    resumen: "Una cita para que el niño conozca el consultorio sin miedo.",
    descripcion:
      "La primera cita de un niño no debería ser el día que le duele algo. Esta consulta está diseñada para que conozca el lugar, se suba al sillón por gusto y se deje revisar sin drama. Revisamos dientes, mordida y hábitos, y hablamos con los papás de lo que sí importa.\n\nSi hace falta tratamiento, lo agendamos para otro día. Nunca convertimos la primera visita en algo desagradable, porque de eso depende cómo se lleve con el dentista los siguientes veinte años.",
    beneficios: [
      "Sin tratamiento invasivo en la primera cita",
      "Detecta problemas de mordida a tiempo",
      "Enseña técnica de cepillado al niño y a los papás",
      "Construye una relación sin miedo con el dentista",
    ],
    pasos: [
      { titulo: "Recorrido", detalle: "El niño conoce el consultorio y los instrumentos, sin prisa." },
      { titulo: "Revisión", detalle: "Exploración de dientes, encías y mordida jugando." },
      { titulo: "Cepillado guiado", detalle: "Practicamos la técnica junto con los papás." },
      { titulo: "Plan y recomendaciones", detalle: "Hablamos de dieta, hábitos y siguientes pasos si los hay." },
    ],
    incluye: ["Consulta completa", "Revisión de mordida", "Instrucción de higiene", "Plan preventivo"],
    duracionMinutos: 40,
    sesiones: 1,
    precioDesde: 450,
    imagenes: ["https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?q=80&w=1400"],
    icono: "infantil",
    destacado: true,
    doctoresIds: ["d5"],
    faq: [
      { id: "s11f1", pregunta: "¿A qué edad debe ser la primera visita?", respuesta: "Al cumplir el primer año o cuando salga el primer diente, lo que ocurra primero. Aunque no haya nada que tratar, sirve para orientar a los papás." },
      { id: "s11f2", pregunta: "¿Puedo entrar con mi hijo?", respuesta: "Claro. En niños pequeños preferimos que estés presente; en mayores de siete a veces cooperan mejor solos, pero tú decides." },
    ],
  },
  {
    id: "s12",
    slug: "selladores-y-fluor",
    nombre: "Selladores y flúor",
    categoria: "odontopediatria",
    resumen: "Blindaje preventivo para las muelas de los niños.",
    descripcion:
      "Las muelas permanentes salen alrededor de los seis años con surcos profundos donde el cepillo no entra. Los selladores son una resina líquida que rellena esos surcos y los deja lisos, reduciendo el riesgo de caries de forma importante.\n\nSe aplican sin anestesia, sin taladro y sin dolor: se limpia la muela, se coloca la resina y se endurece con luz. Se combina con barniz de flúor, que refuerza el esmalte de toda la boca.",
    beneficios: [
      "Reduce mucho el riesgo de caries en molares",
      "Sin anestesia, sin taladro y sin dolor",
      "Se aplica en menos de veinte minutos",
      "Mucho más barato que tratar la caries después",
    ],
    pasos: [
      { titulo: "Revisión de molares", detalle: "Confirmamos que los surcos estén sanos antes de sellar." },
      { titulo: "Limpieza", detalle: "Profilaxis de la superficie a sellar." },
      { titulo: "Sellado", detalle: "Colocamos la resina fluida y la endurecemos con luz." },
      { titulo: "Barniz de flúor", detalle: "Aplicación final en toda la boca." },
    ],
    incluye: ["Revisión", "Limpieza de la superficie", "Selladores por molar", "Barniz de flúor"],
    duracionMinutos: 30,
    sesiones: 1,
    precioDesde: 600,
    imagenes: ["https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=1400"],
    icono: "sellador",
    destacado: false,
    doctoresIds: ["d5"],
    faq: [
      { id: "s12f1", pregunta: "¿Cuánto duran los selladores?", respuesta: "De tres a cinco años. Los revisamos en cada control y los reponemos si se desgastaron." },
      { id: "s12f2", pregunta: "¿El flúor es seguro?", respuesta: "Sí, en la concentración y frecuencia que usamos en consultorio. El riesgo aparece con ingestas altas y repetidas, no con una aplicación semestral." },
    ],
  },
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return MOCK_SERVICIOS.find((s) => s.slug === slug);
}

export function getServiciosDestacados(limit = 6): Servicio[] {
  return MOCK_SERVICIOS.filter((s) => s.destacado).slice(0, limit);
}

export function getServiciosPorCategoria(categoria: CategoriaServicio | ""): Servicio[] {
  if (!categoria) return MOCK_SERVICIOS;
  return MOCK_SERVICIOS.filter((s) => s.categoria === categoria);
}

export function getServiciosByIds(ids: string[]): Servicio[] {
  return MOCK_SERVICIOS.filter((s) => ids.includes(s.id));
}

export function getServiciosRelacionados(servicio: Servicio, limit = 3): Servicio[] {
  const mismaCategoria = MOCK_SERVICIOS.filter(
    (s) => s.categoria === servicio.categoria && s.id !== servicio.id
  );
  const resto = MOCK_SERVICIOS.filter(
    (s) => s.categoria !== servicio.categoria && s.id !== servicio.id
  );
  return [...mismaCategoria, ...resto].slice(0, limit);
}
