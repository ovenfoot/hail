.. _dbNSFP_variants:

dbNSFP_variants
===============

*  **Versions:** 4.0
*  **Reference genome builds:** GRCh37, GRCh38
*  **Type:** :class:`.Table`

Schema (4.0, GRCh37)
~~~~~~~~~~~~~~~~~~~~

.. code-block:: text

    ----------------------------------------
    Global fields:
        None
    ----------------------------------------
    Row fields:
        'pos(1-based)': int32
        'ref': str
        'alt': str
        'aaref': str
        'aaalt': str
        'rs_dbSNP151': str
        'hg19_chr': str
        'hg19_pos(1-based)': int32
        'hg18_chr': str
        'hg18_pos(1-based)': int32
        'aapos': str
        'genename': str
        'Ensembl_geneid': str
        'Ensembl_transcriptid': str
        'Ensembl_proteinid': str
        'Uniprot_acc': str
        'Uniprot_entry': str
        'HGVSc_ANNOVAR': str
        'HGVSp_ANNOVAR': str
        'HGVSc_snpEff': str
        'HGVSp_snpEff': str
        'HGVSc_VEP': str
        'HGVSp_VEP': str
        'APPRIS': str
        'GENCODE_basic': str
        'TSL': str
        'VEP_canonical': str
        'cds_strand': str
        'refcodon': str
        'codonpos': str
        'codon_degeneracy': str
        'Ancestral_allele': str
        'AltaiNeandertal': str
        'Denisova': str
        'VindijiaNeandertal': str
        'SIFT_score': str
        'SIFT_converted_rankscore': float64
        'SIFT_pred': str
        'SIFT4G_score': str
        'SIFT4G_converted_rankscore': float64
        'SIFT4G_pred': str
        'Polyphen2_HDIV_score': str
        'Polyphen2_HDIV_rankscore': float64
        'Polyphen2_HDIV_pred': str
        'Polyphen2_HVAR_score': str
        'Polyphen2_HVAR_rankscore': float64
        'Polyphen2_HVAR_pred': str
        'LRT_score': float64
        'LRT_converted_rankscore': float64
        'LRT_pred': str
        'LRT_Omega': float64
        'MutationTaster_score': str
        'MutationTaster_converted_rankscore': float64
        'MutationTaster_pred': str
        'MutationTaster_model': str
        'MutationTaster_AAE': str
        'MutationAssessor_score': str
        'MutationAssessor_rankscore': float64
        'MutationAssessor_pred': str
        'FATHMM_score': str
        'FATHMM_converted_rankscore': float64
        'FATHMM_pred': str
        'PROVEAN_score': str
        'PROVEAN_converted_rankscore': float64
        'PROVEAN_pred': str
        'VEST4_score': str
        'VEST4_rankscore': float64
        'MetaSVM_score': float64
        'MetaSVM_rankscore': float64
        'MetaSVM_pred': str
        'MetaLR_score': float64
        'MetaLR_rankscore': float64
        'MetaLR_pred': str
        'Reliability_index': int32
        'M-CAP_score': float64
        'M-CAP_rankscore': float64
        'M-CAP_pred': str
        'REVEL_score': float64
        'REVEL_rankscore': float64
        'MutPred_score': str
        'MutPred_rankscore': float64
        'MutPred_protID': str
        'MutPred_AAchange': str
        'MutPred_Top5features': str
        'MVP_score': str
        'MVP_rankscore': float64
        'MPC_score': str
        'MPC_rankscore': float64
        'PrimateAI_score': float64
        'PrimateAI_rankscore': float64
        'PrimateAI_pred': str
        'DEOGEN2_score': str
        'DEOGEN2_rankscore': float64
        'DEOGEN2_pred': str
        'Aloft_Fraction_transcripts_affected': str
        'Aloft_prob_Tolerant': str
        'Aloft_prob_Recessive': str
        'Aloft_prob_Dominant': str
        'Aloft_pred': str
        'Aloft_Confidence': str
        'CADD_raw': float64
        'CADD_raw_rankscore': float64
        'CADD_phred': float64
        'DANN_score': float64
        'DANN_rankscore': float64
        'fathmm-MKL_coding_score': float64
        'fathmm-MKL_coding_rankscore': float64
        'fathmm-MKL_coding_pred': str
        'fathmm-MKL_coding_group': str
        'fathmm-XF_coding_score': float64
        'fathmm-XF_coding_rankscore': float64
        'fathmm-XF_coding_pred': str
        'Eigen-raw_coding': float64
        'Eigen-raw_coding_rankscore': float64
        'Eigen-pred_coding': float64
        'Eigen-PC-raw_coding': float64
        'Eigen-PC-raw_coding_rankscore': float64
        'Eigen-PC-phred_coding': float64
        'GenoCanyon_score': float64
        'GenoCanyon_rankscore': float64
        'integrated_fitCons_score': float64
        'integrated_fitCons_rankscore': float64
        'integrated_confidence_value': int32
        'GM12878_fitCons_score': float64
        'GM12878_fitCons_rankscore': float64
        'GM12878_confidence_value': int32
        'H1-hESC_fitCons_score': float64
        'H1-hESC_fitCons_rankscore': float64
        'H1-hESC_confidence_value': int32
        'HUVEC_fitCons_score': float64
        'HUVEC_fitCons_rankscore': float64
        'HUVEC_confidence_value': int32
        'LINSIGHT': float64
        'LINSIGHT_rankscore': float64
        'GERP++_NR': float64
        'GERP++_RS': float64
        'GERP++_RS_rankscore': float64
        'phyloP100way_vertebrate': float64
        'phyloP100way_vertebrate_rankscore': float64
        'phyloP30way_mammalian': float64
        'phyloP30way_mammalian_rankscore': float64
        'phyloP17way_primate': float64
        'phyloP17way_primate_rankscore': float64
        'phastCons100way_vertebrate': float64
        'phastCons100way_vertebrate_rankscore': float64
        'phastCons30way_mammalian': float64
        'phastCons30way_mammalian_rankscore': float64
        'phastCons17way_primate': float64
        'phastCons17way_primate_rankscore': float64
        'SiPhy_29way_pi': str
        'SiPhy_29way_logOdds': float64
        'SiPhy_29way_logOdds_rankscore': float64
        'bStatistic': int32
        'bStatistic_rankscore': float64
        '1000Gp3_AC': int32
        '1000Gp3_AF': float64
        '1000Gp3_AFR_AC': int32
        '1000Gp3_AFR_AF': float64
        '1000Gp3_EUR_AC': int32
        '1000Gp3_EUR_AF': float64
        '1000Gp3_AMR_AC': int32
        '1000Gp3_AMR_AF': float64
        '1000Gp3_EAS_AC': int32
        '1000Gp3_EAS_AF': float64
        '1000Gp3_SAS_AC': int32
        '1000Gp3_SAS_AF': float64
        'TWINSUK_AC': int32
        'TWINSUK_AF': float64
        'ALSPAC_AC': int32
        'ALSPAC_AF': float64
        'UK10K_AC': int32
        'UK10K_AF': float64
        'ESP6500_AA_AC': int32
        'ESP6500_AA_AF': float64
        'ESP6500_EA_AC': int32
        'ESP6500_EA_AF': float64
        'ExAC_AC': int32
        'ExAC_AF': float64
        'ExAC_Adj_AC': int32
        'ExAC_Adj_AF': float64
        'ExAC_AFR_AC': int32
        'ExAC_AFR_AF': float64
        'ExAC_AMR_AC': int32
        'ExAC_AMR_AF': float64
        'ExAC_EAS_AC': int32
        'ExAC_EAS_AF': float64
        'ExAC_FIN_AC': int32
        'ExAC_FIN_AF': float64
        'ExAC_NFE_AC': int32
        'ExAC_NFE_AF': float64
        'ExAC_SAS_AC': int32
        'ExAC_SAS_AF': float64
        'ExAC_nonTCGA_AC': int32
        'ExAC_nonTCGA_AF': float64
        'ExAC_nonTCGA_Adj_AC': int32
        'ExAC_nonTCGA_Adj_AF': float64
        'ExAC_nonTCGA_AFR_AC': int32
        'ExAC_nonTCGA_AFR_AF': float64
        'ExAC_nonTCGA_AMR_AC': int32
        'ExAC_nonTCGA_AMR_AF': float64
        'ExAC_nonTCGA_EAS_AC': int32
        'ExAC_nonTCGA_EAS_AF': float64
        'ExAC_nonTCGA_FIN_AC': int32
        'ExAC_nonTCGA_FIN_AF': float64
        'ExAC_nonTCGA_NFE_AC': int32
        'ExAC_nonTCGA_NFE_AF': float64
        'ExAC_nonTCGA_SAS_AC': int32
        'ExAC_nonTCGA_SAS_AF': float64
        'ExAC_nonpsych_AC': int32
        'ExAC_nonpsych_AF': float64
        'ExAC_nonpsych_Adj_AC': int32
        'ExAC_nonpsych_Adj_AF': float64
        'ExAC_nonpsych_AFR_AC': int32
        'ExAC_nonpsych_AFR_AF': float64
        'ExAC_nonpsych_AMR_AC': int32
        'ExAC_nonpsych_AMR_AF': float64
        'ExAC_nonpsych_EAS_AC': int32
        'ExAC_nonpsych_EAS_AF': float64
        'ExAC_nonpsych_FIN_AC': int32
        'ExAC_nonpsych_FIN_AF': float64
        'ExAC_nonpsych_NFE_AC': int32
        'ExAC_nonpsych_NFE_AF': float64
        'ExAC_nonpsych_SAS_AC': int32
        'ExAC_nonpsych_SAS_AF': float64
        'gnomAD_exomes_flag': str
        'gnomAD_exomes_AC': int32
        'gnomAD_exomes_AN': int32
        'gnomAD_exomes_AF': float64
        'gnomAD_exomes_nhomalt': int32
        'gnomAD_exomes_AFR_AC': int32
        'gnomAD_exomes_AFR_AN': int32
        'gnomAD_exomes_AFR_AF': float64
        'gnomAD_exomes_AFR_nhomalt': int32
        'gnomAD_exomes_AMR_AC': int32
        'gnomAD_exomes_AMR_AN': int32
        'gnomAD_exomes_AMR_AF': float64
        'gnomAD_exomes_AMR_nhomalt': int32
        'gnomAD_exomes_ASJ_AC': int32
        'gnomAD_exomes_ASJ_AN': int32
        'gnomAD_exomes_ASJ_AF': float64
        'gnomAD_exomes_ASJ_nhomalt': int32
        'gnomAD_exomes_EAS_AC': int32
        'gnomAD_exomes_EAS_AN': int32
        'gnomAD_exomes_EAS_AF': float64
        'gnomAD_exomes_EAS_nhomalt': int32
        'gnomAD_exomes_FIN_AC': int32
        'gnomAD_exomes_FIN_AN': int32
        'gnomAD_exomes_FIN_AF': float64
        'gnomAD_exomes_FIN_nhomalt': int32
        'gnomAD_exomes_NFE_AC': int32
        'gnomAD_exomes_NFE_AN': int32
        'gnomAD_exomes_NFE_AF': float64
        'gnomAD_exomes_NFE_nhomalt': int32
        'gnomAD_exomes_SAS_AC': int32
        'gnomAD_exomes_SAS_AN': int32
        'gnomAD_exomes_SAS_AF': float64
        'gnomAD_exomes_SAS_nhomalt': int32
        'gnomAD_exomes_POPMAX_AC': int32
        'gnomAD_exomes_POPMAX_AN': int32
        'gnomAD_exomes_POPMAX_AF': float64
        'gnomAD_exomes_POPMAX_nhomalt': int32
        'gnomAD_exomes_controls_AC': int32
        'gnomAD_exomes_controls_AN': int32
        'gnomAD_exomes_controls_AF': float64
        'gnomAD_exomes_controls_nhomalt': int32
        'gnomAD_exomes_controls_AFR_AC': int32
        'gnomAD_exomes_controls_AFR_AN': int32
        'gnomAD_exomes_controls_AFR_AF': float64
        'gnomAD_exomes_controls_AFR_nhomalt': int32
        'gnomAD_exomes_controls_AMR_AC': int32
        'gnomAD_exomes_controls_AMR_AN': int32
        'gnomAD_exomes_controls_AMR_AF': float64
        'gnomAD_exomes_controls_AMR_nhomalt': int32
        'gnomAD_exomes_controls_ASJ_AC': int32
        'gnomAD_exomes_controls_ASJ_AN': int32
        'gnomAD_exomes_controls_ASJ_AF': float64
        'gnomAD_exomes_controls_ASJ_nhomalt': int32
        'gnomAD_exomes_controls_EAS_AC': int32
        'gnomAD_exomes_controls_EAS_AN': int32
        'gnomAD_exomes_controls_EAS_AF': float64
        'gnomAD_exomes_controls_EAS_nhomalt': int32
        'gnomAD_exomes_controls_FIN_AC': int32
        'gnomAD_exomes_controls_FIN_AN': int32
        'gnomAD_exomes_controls_FIN_AF': float64
        'gnomAD_exomes_controls_FIN_nhomalt': int32
        'gnomAD_exomes_controls_NFE_AC': int32
        'gnomAD_exomes_controls_NFE_AN': int32
        'gnomAD_exomes_controls_NFE_AF': float64
        'gnomAD_exomes_controls_NFE_nhomalt': int32
        'gnomAD_exomes_controls_SAS_AC': int32
        'gnomAD_exomes_controls_SAS_AN': int32
        'gnomAD_exomes_controls_SAS_AF': float64
        'gnomAD_exomes_controls_SAS_nhomalt': int32
        'gnomAD_exomes_controls_POPMAX_AC': int32
        'gnomAD_exomes_controls_POPMAX_AN': int32
        'gnomAD_exomes_controls_POPMAX_AF': float64
        'gnomAD_exomes_controls_POPMAX_nhomalt': int32
        'gnomAD_genomes_flag': str
        'gnomAD_genomes_AC': int32
        'gnomAD_genomes_AN': int32
        'gnomAD_genomes_AF': float64
        'gnomAD_genomes_nhomalt': int32
        'gnomAD_genomes_AFR_AC': int32
        'gnomAD_genomes_AFR_AN': int32
        'gnomAD_genomes_AFR_AF': float64
        'gnomAD_genomes_AFR_nhomalt': int32
        'gnomAD_genomes_AMR_AC': int32
        'gnomAD_genomes_AMR_AN': int32
        'gnomAD_genomes_AMR_AF': float64
        'gnomAD_genomes_AMR_nhomalt': int32
        'gnomAD_genomes_ASJ_AC': int32
        'gnomAD_genomes_ASJ_AN': int32
        'gnomAD_genomes_ASJ_AF': float64
        'gnomAD_genomes_ASJ_nhomalt': int32
        'gnomAD_genomes_EAS_AC': int32
        'gnomAD_genomes_EAS_AN': int32
        'gnomAD_genomes_EAS_AF': float64
        'gnomAD_genomes_EAS_nhomalt': int32
        'gnomAD_genomes_FIN_AC': int32
        'gnomAD_genomes_FIN_AN': int32
        'gnomAD_genomes_FIN_AF': float64
        'gnomAD_genomes_FIN_nhomalt': int32
        'gnomAD_genomes_NFE_AC': int32
        'gnomAD_genomes_NFE_AN': int32
        'gnomAD_genomes_NFE_AF': float64
        'gnomAD_genomes_NFE_nhomalt': int32
        'gnomAD_genomes_POPMAX_AC': int32
        'gnomAD_genomes_POPMAX_AN': int32
        'gnomAD_genomes_POPMAX_AF': float64
        'gnomAD_genomes_POPMAX_nhomalt': int32
        'gnomAD_genomes_controls_AC': int32
        'gnomAD_genomes_controls_AN': int32
        'gnomAD_genomes_controls_AF': float64
        'gnomAD_genomes_controls_nhomalt': int32
        'gnomAD_genomes_controls_AFR_AC': int32
        'gnomAD_genomes_controls_AFR_AN': int32
        'gnomAD_genomes_controls_AFR_AF': float64
        'gnomAD_genomes_controls_AFR_nhomalt': int32
        'gnomAD_genomes_controls_AMR_AC': int32
        'gnomAD_genomes_controls_AMR_AN': int32
        'gnomAD_genomes_controls_AMR_AF': float64
        'gnomAD_genomes_controls_AMR_nhomalt': int32
        'gnomAD_genomes_controls_ASJ_AC': int32
        'gnomAD_genomes_controls_ASJ_AN': int32
        'gnomAD_genomes_controls_ASJ_AF': float64
        'gnomAD_genomes_controls_ASJ_nhomalt': int32
        'gnomAD_genomes_controls_EAS_AC': int32
        'gnomAD_genomes_controls_EAS_AN': int32
        'gnomAD_genomes_controls_EAS_AF': float64
        'gnomAD_genomes_controls_EAS_nhomalt': int32
        'gnomAD_genomes_controls_FIN_AC': int32
        'gnomAD_genomes_controls_FIN_AN': int32
        'gnomAD_genomes_controls_FIN_AF': float64
        'gnomAD_genomes_controls_FIN_nhomalt': int32
        'gnomAD_genomes_controls_NFE_AC': int32
        'gnomAD_genomes_controls_NFE_AN': int32
        'gnomAD_genomes_controls_NFE_AF': float64
        'gnomAD_genomes_controls_NFE_nhomalt': int32
        'gnomAD_genomes_controls_POPMAX_AC': int32
        'gnomAD_genomes_controls_POPMAX_AN': int32
        'gnomAD_genomes_controls_POPMAX_AF': float64
        'gnomAD_genomes_controls_POPMAX_nhomalt': int32
        'clinvar_id': int32
        'clinvar_clnsig': str
        'clinvar_trait': str
        'clinvar_review': str
        'clinvar_hgvs': str
        'clinvar_var_source': str
        'clinvar_MedGen_id': str
        'clinvar_OMIM_id': str
        'clinvar_Orphanet_id': str
        'Interpro_domain': str
        'GTEx_V7_gene': str
        'GTEx_V7_tissue': str
        'Geuvadis_eQTL_target_gene': str
        'locus': locus<GRCh37>
        'alleles': array<str>
        'chr': str
    ----------------------------------------
    Key: ['locus', 'alleles']
    ----------------------------------------

