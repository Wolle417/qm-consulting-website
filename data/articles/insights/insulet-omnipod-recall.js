// Insulet Omnipod 5 Recall — Insight Article
// Sprache: Primär DE, EN-Variante über isDE prop

export function InsuletOmnipodRecall({ isDE }) {
  if (!isDE) return <InsuletOmnipodRecallEN />;

  return (
    <div>
      <h2>Was ist passiert</h2>
      <p>
        Am 18. März 2026 hat die CDRH der FDA einen <strong>Early Alert</strong> veröffentlicht — eine 
        Kategorie, die für potenziell hochriskante Produktprobleme reserviert ist. Betroffen: Omnipod 5 
        Pods von Insulet Corporation.
      </p>
      <p>
        Bestimmte Produktions-Lots haben einen kleinen Riss in der internen Schlauchleitung, die Insulin 
        liefert. Das Insulin läuft im Pod aus, statt in den Körper zu gelangen. Die Folge: Unterdosierung, 
        Hyperglykämie, im schlimmsten Fall diabetische Ketoazidose — lebensbedrohlich.
      </p>
      <p>
        <strong>18 schwere Nebenwirkungen. Krankenhauseinweisungen. Keine Todesfälle.</strong>
      </p>

      <h2>Insulet: Größenordnung und Marktposition</h2>
      <p>
        Insulet ist der zweitgrößte Insulinpumpen-Hersteller weltweit. $2,7 Mrd. Umsatz, NASDAQ-gelistet 
        unter dem Ticker PODD. Der Omnipod 5 ist in 19 Ländern verfügbar, mit rund 75.000 Nutzern weltweit — 
        davon ca. 10.000 in UK und Deutschland. Seit 2023 in Deutschland voll erstattungsfähig.
      </p>
      <p>
        Der Recall betrifft nur in den USA vertriebene Lots — ca. <strong>1,5% der jährlichen 
        Globalproduktion</strong>. DACH-Nutzer sind nach aktuellem Stand nicht direkt betroffen.
      </p>

      <h2>Die wirtschaftliche Dimension</h2>
      <p>
        Insulet rechnet laut SEC-Filing mit bis zu <strong>$40 Millionen Kosten</strong> für die Korrektur. 
        Bei 1,5% der Produktion. Bei einem Unternehmen mit 25,6% globalem Marktanteil.
      </p>
      <p>
        Insulet hat das Problem über eigenes Produktmonitoring entdeckt — das System hat grundsätzlich 
        funktioniert. Aber 18 schwere Nebenwirkungen waren zu dem Zeitpunkt bereits gemeldet.
      </p>

      <h2>Was das für Ihr Risikomanagement bedeutet</h2>
      <p>
        Ein Riss in einem Schlauch. Kein exotisches Fehlerbild. Prozessvalidierung, 
        Wareneingangsprüfung, In-Process-Kontrollen, statistische Prozesskontrolle — alles 
        Standardwerkzeuge, die in jedem QMS stehen sollten.
      </p>
      <p>
        Die Frage ist nie, ob man sie hat. Die Frage ist, ob sie empfindlich genug eingestellt sind, 
        um so etwas zu finden, bevor es 18 Patienten betrifft.
      </p>
      <p>
        Qualitätsmanagement ist Patientenschutz. Aber es ist auch finanzielles Risikomanagement. 
        $40 Millionen für einen Schlauchdefekt — bei einem Unternehmen, das QM offensichtlich ernst nimmt.
      </p>
      <p>
        <strong>Denn die beste CAPA ist die, die nie nötig wird.</strong>
      </p>

      {/* Sources */}
      <div className="source-box">
        <p><strong>Quellen</strong></p>
        <p>
          FDA Early Alert (18.03.2026):{' '}
          <a href="https://www.fda.gov/medical-devices/medical-device-recalls-and-early-alerts/early-alert-insulin-pump-issue-insulet" target="_blank" rel="noopener noreferrer">
            fda.gov
          </a>
        </p>
        <p>
          Insulet Voluntary Medical Device Correction:{' '}
          <a href="https://www.omnipod.com/mdc-3-26" target="_blank" rel="noopener noreferrer">
            omnipod.com
          </a>
        </p>
        <p>
          Insulet SEC 8-K Filing (12.03.2026):{' '}
          <a href="https://www.sec.gov/Archives/edgar/data/0001145197/000114519726000081/podd-20260312.htm" target="_blank" rel="noopener noreferrer">
            sec.gov
          </a>
        </p>
      </div>
    </div>
  );
}

function InsuletOmnipodRecallEN() {
  return (
    <div>
      <h2>What happened</h2>
      <p>
        On March 18, 2026, the FDA's CDRH published an <strong>Early Alert</strong> — a category reserved 
        for potentially high-risk device issues. Affected: Omnipod 5 Pods by Insulet Corporation.
      </p>
      <p>
        Certain production lots have a small tear in the internal tubing that delivers insulin. Insulin 
        leaks inside the Pod instead of reaching the patient's body. The consequence: under-delivery, 
        hyperglycemia, and in the worst case, diabetic ketoacidosis — life-threatening.
      </p>
      <p>
        <strong>18 serious adverse events. Hospitalizations. No deaths.</strong>
      </p>

      <h2>Insulet: Scale and market position</h2>
      <p>
        Insulet is the world's second-largest insulin pump manufacturer. $2.7B revenue, NASDAQ-listed 
        under ticker PODD. The Omnipod 5 is available in 19 countries, with approximately 75,000 users 
        worldwide — roughly 10,000 in the UK and Germany. Fully reimbursable in Germany since 2023.
      </p>
      <p>
        The recall affects only U.S.-distributed lots — approximately <strong>1.5% of annual global 
        production</strong>. DACH users are not directly affected based on current information.
      </p>

      <h2>The financial dimension</h2>
      <p>
        According to its SEC filing, Insulet expects up to <strong>$40 million in costs</strong> for the 
        correction. For 1.5% of production. At a company with 25.6% global market share.
      </p>
      <p>
        Insulet discovered the problem through its own product monitoring — the system fundamentally 
        worked. But 18 serious adverse events had already been reported by that point.
      </p>

      <h2>What this means for your risk management</h2>
      <p>
        A tear in a tube. Not an exotic failure mode. Process validation, incoming inspection, 
        in-process controls, statistical process control — all standard tools that should exist in 
        every QMS.
      </p>
      <p>
        The question is never whether you have them. The question is whether they're calibrated 
        sensitively enough to catch something like this before it affects 18 patients.
      </p>
      <p>
        Quality management is patient protection. But it's also financial risk management. 
        $40 million for a tubing defect — at a company that clearly takes QM seriously.
      </p>
      <p>
        <strong>Because the best CAPA is the one that's never needed.</strong>
      </p>

      {/* Sources */}
      <div className="source-box">
        <p><strong>Sources</strong></p>
        <p>
          FDA Early Alert (03/18/2026):{' '}
          <a href="https://www.fda.gov/medical-devices/medical-device-recalls-and-early-alerts/early-alert-insulin-pump-issue-insulet" target="_blank" rel="noopener noreferrer">
            fda.gov
          </a>
        </p>
        <p>
          Insulet Voluntary Medical Device Correction:{' '}
          <a href="https://www.omnipod.com/mdc-3-26" target="_blank" rel="noopener noreferrer">
            omnipod.com
          </a>
        </p>
        <p>
          Insulet SEC 8-K Filing (03/12/2026):{' '}
          <a href="https://www.sec.gov/Archives/edgar/data/0001145197/000114519726000081/podd-20260312.htm" target="_blank" rel="noopener noreferrer">
            sec.gov
          </a>
        </p>
      </div>
    </div>
  );
}
