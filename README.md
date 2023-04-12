# medication-definition

> **Warning** This repository is for technical demonstration only. **Medical use
> is prohibited.**

## TODO

Explore which resources should be generated from the raw data. There's a couple
of potentially interesting `CodeSystem` resources, and the various files could
be condensed into actual `MedicinalProductDefinition` resources. It's probably
not worth it to split everything into products, packages and items — given that
I'm far more interested in the intersection of the medication definition and
clinical reasoning modules.

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
