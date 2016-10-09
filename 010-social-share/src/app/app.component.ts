import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  news = {
    title: 'Nearest Earth-like exoplanet might be an ocean world',
    subtitle: 'Bonus: Proxima B is only 4.24 light-years away.',
    images: '../assets/proximab.jpg',
    content: `The astronomy world was set aflame after news broke a few months ago that an Earth-like planet was discovered orbiting
    in the habitable zone around Proxima Centauri, our nearest star neighbor at just over four light-years away. Now new
					details are emerging that paint a clearer picture of what the planet, called Proxima B, might be like. The study, conducted
					by a team of astronomers and astrophysicists from France’s National Center for Scientific Research (CNRS), suggests
					that Proxima B might be an ocean planet reminiscent of the 1995 Kevin Costner film, "Waterworld," covered entirely or
					almost entirely by a liquid ocean.“The planet may very well host liquid water on its surface, and therefore also some
					forms of life, ” the CNRS team wrote in a statement . “The planet could be an ‘ocean planet’, with an ocean covering
					its entire surface, and similar water to some icy moons around Jupiter or Saturn.” The waterworld scenario was just
					one possible conclusion revealed by the analysis, but it's an exciting possibility to imagine. If true, it's likely
					that any creatures that have evolved on Proxima B have body forms streamlined for movement through water, such as what
					we see in fish and cetaceans.Or perhaps it's an ocean world bobbing with gelatinous, jellyfish-like aliens. To reach
					their conclusions, the research team used a compilation of the most up- to - date data, best-guess estimates, and computer
					simulations to determine the probable mass distribution of the planet.They calculated that Proxima B's radius is likely
					between 0.94 and 1.4 times that of Earth’s. If it turns out to be at the higher radius estimates in that range, that's
					where the ocean world scenario comes into play.The planet would be covered by a global sea around 124 miles deep.If
					Proxima B's radius falls in the lower range, that's exciting too.It would mean that the planet is likely surrounded
					by a rocky mantle, just like Earth. Surface water would probably make up around 0.05 percent of its mass, which is very
					similar to our blue world.Of course, the planet could be a dry, dust-swept, barren world too. It's impossible to know
					for sure with current data, but it's encouraging to think that we may have found a second Earth so close to home — that
					is, assuming it isn't already inhabited by bizarre, unimaginable aliens, with their eyes already set on Earth. Then
					maybe it'd be more appropriate to consider our planet a second Proxima B.`
  }
}
