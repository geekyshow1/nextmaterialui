import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  )
}
