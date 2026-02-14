---
title: "Oberservability with eBPF"
collection: talks
type: "Talk"
permalink: /talks/redocs
venue: "Rencontre Entreprises DOCtorants en Sécurité (REDOCS 2025)"
date: 2025-10-13
location: "Marseille, France"
---
Presentation: [Oberservability with eBPF](../files/REDOCS_25_oberservability_with_ebpf_presentation.pdf)

Presentation and supervision of a project for PhD candidates. The objective of the Rencontres Entreprises Doctorants en Sécurité (REDOCS) week, organized by the GDR Computer Security, is to create connections between companies and PhD candidates in cybersecurity ([REDOCS 25](https://gdr-securite.irisa.fr/redocs/redocs25/)).


This work resulted in identifying a method to modify libbpf/libbtf so that it can convert DWARF information into BTF information for Go binaries. For more details, see the [project report](https://gdr-securite.irisa.fr/wp-content/uploads/redocs25-orange.pdf).

## Context

To ensure fine-grained observability of 5G network functions, Orange Research is developing infrastructure-level monitoring solutions capable of collecting in real time any kernel-level data deemed useful for characterizing the execution of these functions within a cloud-native infrastructure such as Kubernetes.

In these environments, eBPF (extended Berkeley Packet Filter) technology proves ideal for implementing observation programs as well as enforcing security policies at the kernel level. To achieve automated observation of container execution, the chosen solution relies on analyzing container memory by loading eBPF observation programs directly into the kernel of the IaaS infrastructure.

These programs leverage the BTF (BPF Type Format) file to automate the reconstruction of kernel data structure formats and to exploit raw data present in kernel memory. This data is then collected and analyzed for monitoring and detection purposes, as well as to ensure infrastructure hardening.

## Objective

The main objective of this project is to develop an automated solution for generating BTF (BPF Type Format) files in order to facilitate the observability of 5G network functions within cloud-native infrastructures, such as those managed by Kubernetes.

This solution must overcome the current limitations of existing tools such as Pahole, which is widely used to generate BTF files for compiled binaries but has limitations in supporting data formats specific to the Go language, which is widely used in the telecom world.

To carry out this project, an initial evaluation phase of Pahole will help better characterize the source of failure cases. We propose conducting these evaluations on the Kubernetes binary. If this first phase concludes that the issue stems from Pahole’s lack of support for Go language specificities, then the second objective will be to extend Pahole to support Go-specific data formats.