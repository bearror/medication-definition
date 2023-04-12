# medication-definition

> **Warning** This repository is for technical demonstration only. **Medical use
> is prohibited.**

## TODO

1. Explore which resources should be generated from the raw data. There's a
   couple of potentially interesting `CodeSystem` resources, and the various
   files could be condensed into actual `MedicinalProductDefinition` resources.
   It's probably not worth it to split everything into products, packages and
   items — given that I'm far more interested in the intersection of the
   medication definition and clinical reasoning modules.
2. Create a basic CDS Hooks service on using the open data for supply shortages
   and/or interchangeable medicinal products. This marks a good place to explore
   good abstractions for getting the auth right. Optimally, go for solutions
   that result in verifiable formal constraints. That is, it should be possible
   to have acceptance tests ensuring that the conformance language defined in
   the CDS Hooks spec is actually followed. (Constraints should be explicit!)
3. Investigate the Meds75+ database and how it might be transformed into
   `MedicationKnowledge` and/or `ClinicalUseDefinition` resources. This marks
   the obvious point-of-interest for clinical reasoning and clinical decision
   support. Create additional CDS Hooks services where it makes sense.
4. Wire up the CDS Hooks feedback endpoint, and figure out all the housekeeping
   (e.g. observability) for running these on a serverless platform. _(Remember
   to include the necessary regulatory disclaimers...)_

---

## Licenses

The [data](data) used for these experiments is provided by Fimea as
[open data][Fimea-open-data] under Fimea's open data license.

> The open data provided by Fimea is licensed under CC BY 4.0. This license
> defines how open data may be utilised. Indicate the name of the licensor, the
> name of the material and the date and time when the material was released by
> Fimea.

The release details of the imported [basic register][Fimea-basic-register] are
included in [saate.txt](data/basic-register/saate.txt) (in Finnish).

[Fimea-open-data]: https://www.fimea.fi/web/en/about_us/open-data
[Fimea-basic-register]: https://www.fimea.fi/web/en/databases_and_registers/basic-register
