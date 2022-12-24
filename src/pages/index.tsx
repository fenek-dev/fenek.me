import dynamic from 'next/dynamic'

const Office = dynamic(() => import('@/components/canvas/Office'), { ssr: false })
// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// Dom components go here
export default function Page(props) {
  return <h1>hello</h1>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Office scale={0.5} position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
