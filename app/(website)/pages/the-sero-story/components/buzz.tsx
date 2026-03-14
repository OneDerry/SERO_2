import { Card } from "@/shared/common";
import Image from "next/image";

export default function Buzz() {
  return (
    <div className="flex items-center gap-8">
      <div>
        <h1>It’s still early — and it’s already buzzing.</h1>
        <p>
          We launched Sero with a few flavours and a lot of hope. What happened
          next?
        </p>
        <p>
          The internet happened. Reviews, reactions, and “Wait — this is zero
          sugar?” replies started pouring in. People didn’t know what they were
          missing until they cracked a can. Now they’re hooked.
        </p>
        <p>(And we’re just getting started.)</p>
      </div>
      <div>
        <Card className="relative w-64 h-64">
          <Image
            src="/placeholder-image.jpg"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
