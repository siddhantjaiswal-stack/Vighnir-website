/**
 * Device-frame illustrations of The Club's screens, drawn in code.
 *
 * These are schematic on purpose: grey bars stand in for text and gradient
 * tiles for photos, so nothing looks like a real person, a real post or real
 * numbers. Labels are the app's own words (tab names, "Suggested",
 * "Very close", "Recording"). Each is wrapped in a <figure> captioned
 * "Illustration" and hidden from screen readers except for that caption.
 */
type Kind =
  | "feed"
  | "minis"
  | "stories"
  | "messages"
  | "floor"
  | "nearby"
  | "host"
  | "session"
  | "moment"
  | "safety";

function Tabs({ on }: { on: number }) {
  return (
    <div className="scr-tabs">
      {[0, 1, 2, 3, 4].map((i) => (
        <i key={i} className={i === on ? "on" : undefined} />
      ))}
    </div>
  );
}

function Lines({ w = ["w70", "w40"] }: { w?: string[] }) {
  return (
    <div className="col">
      {w.map((c, i) => (
        <div key={i} className={`sk ${c}${i === 0 ? " hi" : ""}`} />
      ))}
    </div>
  );
}

function Screen({ kind }: { kind: Kind }) {
  switch (kind) {
    case "feed":
      return (
        <>
          <div className="scr-top">
            <span>The Club</span>
            <span className="pill">My Club</span>
          </div>
          <div className="scr-body">
            <div className="stories">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`av${i < 3 ? " ring" : ""}`} />
              ))}
            </div>
            <div className="row">
              <div className="av" />
              <Lines />
            </div>
            <div className="media" style={{ height: "38%" }} />
            <div className="row">
              <div className="sk w30" />
            </div>
            <div className="row">
              <div className="av" />
              <div className="col">
                <span className="lbl">Suggested</span>
                <div className="sk w60" />
              </div>
            </div>
            <div className="media tall" />
          </div>
          <Tabs on={0} />
        </>
      );
    case "minis":
      return (
        <>
          <div className="media tall" style={{ borderRadius: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "14px 12px 16px", gap: 8 }}>
            <div className="row" style={{ position: "relative", zIndex: 1 }}>
              <div className="av" />
              <Lines w={["w50", "w70"]} />
            </div>
            <div className="row" style={{ position: "relative", zIndex: 1, gap: 6 }}>
              <span className="pill">Sound</span>
              <span className="pill">AI-made label</span>
            </div>
          </div>
          <Tabs on={1} />
        </>
      );
    case "stories":
      return (
        <>
          <div className="scr-top">
            <div className="sk" style={{ flex: 1, background: "#6C5CE7" }} />
          </div>
          <div className="scr-body">
            <div className="media tall" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="pill" style={{ position: "relative", zIndex: 1 }}>Sticker</span>
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="pill on">Close Friends</span>
              <span className="pill">Seen by</span>
            </div>
          </div>
          <div style={{ height: 16 }} />
        </>
      );
    case "messages":
      return (
        <>
          <div className="scr-top">
            <span>Messages</span>
            <span className="pill">Requests</span>
          </div>
          <div className="scr-body">
            <div className="bub"><div className="sk w80" /><div className="sk w50" style={{ marginTop: 5 }} /></div>
            <div className="bub me"><div className="sk w70" /></div>
            <div className="bub" style={{ width: "60%" }}><div className="media" style={{ height: 70 }} /></div>
            <div className="bub me" style={{ width: "55%" }}>
              <div className="row"><span className="pill">▶</span><div className="sk" style={{ flex: 1 }} /></div>
            </div>
            <div className="bub"><div className="sk w60" /></div>
            <div style={{ flex: 1 }} />
            <div className="row" style={{ gap: 6 }}>
              <div className="sk" style={{ flex: 1, height: 26, borderRadius: 13 }} />
              <span className="pill">Voice</span>
              <span className="pill">Video</span>
            </div>
          </div>
          <Tabs on={2} />
        </>
      );
    case "floor":
      return (
        <>
          <div className="scr-top">
            <span>The Floor</span>
            <span className="pill on">Anonymous</span>
          </div>
          <div className="scr-body">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="row">
                <div className="av" style={{ width: 22, height: 22 }} />
                <Lines w={[i % 2 ? "w40" : "w30", i % 3 ? "w80" : "w60"]} />
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div className="sk" style={{ height: 26, borderRadius: 13 }} />
          </div>
          <div style={{ height: 14 }} />
        </>
      );
    case "nearby":
      return (
        <>
          <div className="scr-top">
            <span>Nearby</span>
            <span className="pill">Hide me</span>
          </div>
          <div className="scr-body">
            <div className="row" style={{ gap: 6 }}>
              <span className="pill on">People</span>
              <span className="pill">Hosts</span>
            </div>
            {["Very close", "Close", "A few km away", "Further away"].map((d) => (
              <div key={d} className="row" style={{ padding: "6px 0" }}>
                <div className="av" />
                <div className="col">
                  <div className="sk w50 hi" />
                  <span className="lbl" style={{ color: "#ADA7BD" }}>{d}</span>
                </div>
              </div>
            ))}
          </div>
          <Tabs on={3} />
        </>
      );
    case "host":
      return (
        <>
          <div className="scr-top">
            <span>Host</span>
            <span className="pill">Online sessions only</span>
          </div>
          <div className="scr-body">
            <div className="row">
              <div className="av" style={{ width: 44, height: 44 }} />
              <Lines w={["w60", "w40"]} />
            </div>
            <div className="row" style={{ gap: 6, flexWrap: "wrap" }}>
              <span className="pill">Careers</span>
              <span className="pill">Study help</span>
              <span className="pill">English · Hindi</span>
            </div>
            {["Chat", "Voice", "Video"].map((m) => (
              <div key={m} className="row" style={{ justifyContent: "space-between", padding: "8px 10px", border: "1px solid #24212e", borderRadius: 10 }}>
                <span className="lbl" style={{ color: "#F3F1F8" }}>{m}</span>
                <div className="sk w30" />
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div className="pill on" style={{ justifyContent: "center", padding: "9px 0" }}>Request a session</div>
          </div>
          <div style={{ height: 14 }} />
        </>
      );
    case "session":
      return (
        <>
          <div className="scr-top">
            <span className="pill rec">● Recording</span>
            <span className="pill">Timer</span>
          </div>
          <div className="scr-body">
            <div className="media tall" style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 10 }}>
              <div className="media" style={{ width: 54, height: 80, position: "relative", zIndex: 1, border: "1px solid #3a3550" }} />
            </div>
            <div className="row" style={{ justifyContent: "center", gap: 10, padding: "6px 0" }}>
              <span className="pill">Mic</span>
              <span className="pill">Camera</span>
              <span className="pill rec">End</span>
            </div>
          </div>
          <div style={{ height: 14 }} />
        </>
      );
    case "moment":
      return (
        <>
          <div className="scr-top">
            <span>Daily Moment</span>
            <span className="pill on">Now</span>
          </div>
          <div className="scr-body">
            <div className="media tall" style={{ position: "relative" }}>
              <div className="media" style={{ position: "absolute", top: 10, left: 10, width: 60, height: 84, zIndex: 1, border: "2px solid #000" }} />
            </div>
            <div className="row" style={{ justifyContent: "center", padding: "6px 0" }}>
              <span className="pill">Only My Club sees this</span>
            </div>
          </div>
          <div style={{ height: 14 }} />
        </>
      );
    case "safety":
      return (
        <>
          <div className="scr-top">
            <span>Report post</span>
          </div>
          <div className="scr-body">
            {["w60", "w70", "w50", "w60", "w40"].map((w, i) => (
              <div key={i} className="row" style={{ justifyContent: "space-between", padding: "10px", border: "1px solid #24212e", borderRadius: 10 }}>
                <div className={`sk ${w} hi`} />
                <span style={{ color: "#857F97", fontSize: ".7rem" }}>›</span>
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div className="row" style={{ gap: 6 }}>
              <span className="pill">Block</span>
              <span className="pill">Restrict</span>
              <span className="pill">Mute</span>
            </div>
          </div>
          <div style={{ height: 14 }} />
        </>
      );
  }
}

export default function Phone({
  kind,
  caption,
  width,
}: {
  kind: Kind;
  caption: string;
  width?: number;
}) {
  return (
    <figure className="ill">
      <div className="phone" aria-hidden="true" style={width ? ({ "--w": `${width}px` } as React.CSSProperties) : undefined}>
        <div className="phone-screen">
          <Screen kind={kind} />
        </div>
      </div>
      <figcaption className="cap">Illustration: {caption}</figcaption>
    </figure>
  );
}
