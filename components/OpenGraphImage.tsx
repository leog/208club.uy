// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage: 'url(http://208club.uy/encuentro1_2_low.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div style={{
        display: "flex", width: "100%", alignItems: 'center',
        justifyContent: 'center', height: "100%", flexDirection: "column",
        padding: "15px", backgroundColor: "rgba(0, 0, 0, 0.5)"
      }}>
        <img src="http://208club.uy/logo.png" width="950" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 35,
            fontStyle: 'normal',
            color: 'white',
            marginTop: 20,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          <b>{title}</b>
        </div>
      </div>
    </div>
  )
}
