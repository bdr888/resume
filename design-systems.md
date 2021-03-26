- Cultural buy in
  - Stakeholder leadership needs to believe in it and support it with devoted people
  - Ideally project works just like any feature team (cross-functional. full on open source at the beginning will be chaos)
  - Internal open source worked well after a year and foundation was solid, but key is good process and devoted maintainers

- Technical Leadership
  - Needs to be developer and UX led, 
    - from dev perspective this is a DX concern, they need to love it because it makes development easy, it is joyful to use
    - same for ux, they are often stuck in between client and dev, if ux and dev are united, defining AC is so much easier 
  - Bring dev's opinions and ideas on tech decisions together and define standards
  - Put together some research, give a good presentation, or better yet POC. It's much easier to get buy in when you've proven your solution.
  - For us CSS approach was the most contentious issue

- UX and Dev must be aligned
  - Sit down and learn to speak each other's languages - don't assume understanding and let jargon go undefined, usually a disconnect in there
    - Button, Link, CTA
  - Accessibility and performance must be paramount

- Solid foundation and CI/CD process
  - Very clear principles and guidelines in code
  - CONTRIBUTING.md
  - Story book for dev environment
  - Governance tests
  - Automated tests run in pipeline
  - Automatic semantic versioning based on tests (semantic-release)
  - This all makes  adoption  

- Approach it organically
  - Don't build things you don't need yet (this was part of chameleon's prob, we didn't have a project to use this on, it was theoretical)
  - When a feature team needs a button, start with a button.
  - Start with atoms, build up to molecules
  - Tolerate ambiguity at the beginning - not all use cases will be revealed until you start using it, it is ok to be agile.
  - Don't use MaterialUI - magellan team wanted a shortcut at the beginning, but then client had very specific ideas about how web UX should be.
  - Don't underestimate the complexity of a simple coponent


  sling - all in custom approach
  magellan - half baked - at whims of client
  chameleon - top down theoretical
  commonwealth - lightweight, extend simple library
