import "./App.css";

export default function Service(props) {
  return (
    <div class="min-w-sm h-64 rounded hover:shadow-xl items-center">
      <div class="px-6 py-3">
        <img class="pl-14" src={props.image} />
        <h4 class="font-bold text-center">{props.title}</h4>
        <p class="text-center">{props.description}</p>
      </div>
    </div>
  );
}
