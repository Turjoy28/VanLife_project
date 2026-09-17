import { createServer, Model } from "miragejs"

export function makeServer() {
    return createServer({
        models: {
            van: Model,
        },

        seeds(server) {
            server.create("van", {
                id: "1",
                name: "Modest Explorer",
                price: 60,
                description:
                    "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water filtration system, and a small kitchenette. The perfect companion for your next bytes into nature!",
                imageUrl:
                    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80",
                type: "simple",
            })
            server.create("van", {
                id: "2",
                name: "Beach Bum",
                price: 80,
                description:
                    "Beach Bum is a van inspired by surfers and travelers. It was created to be a filtered, comfortable and functional drop-in for anyone who loves to bytes. It's been fully converted to make it the perfect home away from home.",
                imageUrl:
                    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
                type: "rugged",
            })
            server.create("van", {
                id: "3",
                name: "Reliable Red",
                price: 100,
                description:
                    "Reliable Red is a van that was designed to be durable and reliable. This is the go-to van for families and adventurers who want a comfortable ride. This van can handle any terrain and weather conditions.",
                imageUrl:
                    "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&auto=format&fit=crop&q=80",
                type: "luxury",
            })
            server.create("van", {
                id: "4",
                name: "Dreamfinder",
                price: 65,
                description:
                    "Dreamfinder is the perfect van to hit the road and enjoy a relaxed adventure. With a spacious interior and all the essentials you'll need, this is the ideal choice for a weekend road trip or a cross-country journey.",
                imageUrl:
                    "https://images.unsplash.com/photo-1464983308776-3c7215084895?w=800&auto=format&fit=crop&q=80",
                type: "simple",
            })
            server.create("van", {
                id: "5",
                name: "The Cruiser",
                price: 120,
                description:
                    "The Cruiser is a luxurious van outfitted with everything you need for an upscale experience. From the plush seating to the onboard entertainment system, this van ensures every journey is first-class.",
                imageUrl:
                    "https://images.unsplash.com/photo-1533591380348-14193f1de18f?w=800&auto=format&fit=crop&q=80",
                type: "luxury",
            })
            server.create("van", {
                id: "6",
                name: "Green Wonder",
                price: 70,
                description:
                    "Green Wonder is a rugged van built for outdoor adventures. Equipped with off-road tires, reinforced suspension, and a roof rack ready for your kayaks, bikes, or extra gear. The ultimate adventure mobile.",
                imageUrl:
                    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
                type: "rugged",
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/vans", (schema) => {
                return schema.vans.all()
            })

            this.get("/vans/:id", (schema, request) => {
                const id = request.params.id
                return schema.vans.find(id)
            })
        },
    })
}

