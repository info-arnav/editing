import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";

const PrivacyPolicy: FunctionComponent = () => {
  const [extra, extras] = useState("");
  const [userNames, finder] = useState("");
  const [value, changer] = useState("");
  const [array, setter] = useState({
    username: "",
    phone: "",
    name: "",
  });
  useEffect(() => {
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
    fetch(`/search/data/${value}`)
      .then((e) => e.json())
      .then((e) => setter(e));
    fetch(`/`).then((e) => e.text());
    fetch(`/follower/boolean`)
      .then((e) => e.json())
      .then((e) => extras(e.array[0].followers));
  }, [value]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      <main>
        <br></br>
        <br></br>
        <h1>hidden</h1>
        <br></br>
        <br></br>
        <h1>Privacy Policy Of This App Is Here By Shown</h1>
        EFFECTIVE: July 24, 2020. IMPORTANT, READ CAREFULLY : YOUR USE OF AND
        ACCESS TO THE WEBSITE AND PRODUCTS AND SERVICES AND ASSOCIATED SOFTWARE
        (COLLECTIVELY, THE "SERVICES") OF whatsoever the name of the application
        is VIDEO COMMUNICATIONS, INC. AND ITS AFFILIATES ("whatsoever the name
        of the application is") IS CONDITIONED UPON YOUR COMPLIANCE WITH AND
        ACCEPTANCE OF THESE TERMS, WHICH INCLUDE YOUR AGREEMENT TO ARBITRATE
        CLAIMS. PLEASE REVIEW THOROUGHLY BEFORE ACCEPTING. BY CLICKING/CHECKING
        THE "I AGREE" BUTTON/BOX, ACCESSING THE whatsoever the name of the
        application is WEBSITE OR BY UTILIZING THE whatsoever the name of the
        application is SERVICES YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE
        AND ALL EXHIBITS, ORDER FORMS, AND INCORPORATED POLICIES (THE
        “AGREEMENT” OR “TOS”). THE whatsoever the name of the application is
        SERVICES ARE NOT AVAILABLE TO PERSONS WHO ARE NOT LEGALLY ELIGIBLE TO BE
        BOUND BY THESE TERMS OF SERVICE. whatsoever the name of the application
        is will provide the Services, and you may access and use the Services,
        in accordance with this Agreement. If You order Services through an
        on-line registration page or an order form (each an "Order Form"), the
        Order Form may contain additional terms and conditions and information
        regarding the Services you are ordering. Unless otherwise expressly set
        forth in any such additional terms and conditions applicable to the
        specific Service which You choose to use, those additional terms are
        hereby incorporated into this Agreement in relation to Your use of that
        Service. System Requirements . Use of the Services requires one or more
        compatible devices, Internet access (fees may apply), and certain
        software (fees may apply), and may require obtaining updates or upgrades
        from time to time. Because use of the Services involves hardware,
        software, and Internet access, Your ability to access and use the
        Services may be affected by the performance of these factors. High speed
        Internet access is recommended. You acknowledge and agree that such
        system requirements, which may be changed from time to time, are Your
        responsibility. DEFINITIONS. The following definitions will apply in
        this Agreement, and any reference to the singular includes a reference
        to the plural and vice versa. Service specific definitions are found in
        Exhibit A. “Affiliate” means, with respect to a Party, any entity that
        directly or indirectly controls, is controlled by or is under common
        control with that Party. For purposes of this Agreement, “control” means
        an economic or voting interest of at least fifty percent (50%) or, in
        the absence of such economic or voting interest, the power to direct or
        cause the direction of the management and set the policies of such
        entity. “End User” means a Host or Participant (as defined in Exhibit A)
        who uses the Services. “Initial Subscription Term“ means the initial
        subscription term for a Service as specified in an Order Form. "Service
        Effective Date" means the date an Initial Subscription Term begins as
        specified in an Order Form. "Renewal Term" means the renewal
        subscription term for a Service commencing after the Initial
        Subscription Term or another Renewal Term as specified in an Order Form.
        SERVICES. whatsoever the name of the application is will provide the
        Services as described on the Order Form, and standard updates to the
        Services that are made generally available by whatsoever the name of the
        application is during the term. whatsoever the name of the application
        is may, in its sole discretion, discontinue the Services or modify the
        features of the Services from time to time without prior notice. Beta
        Services. whatsoever the name of the application is may, from time to
        time, offer access to services that are classified as Beta version.
        Access to and use of Beta versions may be subject to additional
        agreements. whatsoever the name of the application is makes no
        representations that a Beta version will ever be made generally
        available and reserves the right to discontinue or modify a Beta version
        at any time without notice. Beta versions are provided AS IS, may
        contain bugs, errors or other defects, and Your use of a Beta version is
        at Your sole risk. USE OF SERVICES AND YOUR RESPONSIBILITIES. You may
        only use the Services pursuant to the terms of this Agreement. You are
        solely responsible for Your and Your End Users’ use of the Services and
        shall abide by, and ensure compliance with, all Laws in connection with
        Your and each End User’s use of the Services, including but not limited
        to Laws related to recording, intellectual property, privacy and export
        control. Use of the Services is void where prohibited. Registration
        Information. You may be required to provide information about Yourself
        in order to register for and/or use certain Services. You agree that any
        such information shall be accurate. You may also be asked to choose a
        user name and password. You are entirely responsible for maintaining the
        security of Your user name and password and agree not to disclose such
        to any third party. Your Content. You agree that You are solely
        responsible for the content ("Content") sent or transmitted by You or
        displayed or uploaded by You in using the Services and for compliance
        with all Laws pertaining to the Content, including, but not limited to,
        Laws requiring You to obtain the consent of a third party to use the
        Content and to provide appropriate notices of third party rights. You
        represent and warrant that You have the right to upload the Content to
        whatsoever the name of the application is and that such use does not
        violate or infringe on any rights of any third party. Under no
        circumstances will whatsoever the name of the application is be liable
        in any way for any (a) Content that is transmitted or viewed while using
        the Services, (b) errors or omissions in the Content, or (c) any loss or
        damage of any kind incurred as a result of the use of, access to, or
        denial of access to Content. Although whatsoever the name of the
        application is is not responsible for any Content, whatsoever the name
        of the application is may delete any Content, at any time without notice
        to You, if whatsoever the name of the application is becomes aware that
        it violates any provision of this Agreement, or any law. You retain
        copyright and any other rights You already hold in Content which You
        submit, post or display on or through, the Services. Recordings. You are
        responsible for compliance will all recording laws. The host can choose
        to record whatsoever the name of the application is meetings and
        Webinars. By using the Services, you are giving whatsoever the name of
        the application is consent to store recordings for any or all whatsoever
        the name of the application is meetings or webinars that you join, if
        such recordings are stored in our systems. You will receive a
        notification (visual or otherwise) when recording is enabled. If you do
        not consent to being recorded, you can choose to leave the meeting or
        webinar Prohibited Use.You agree that You will not use, and will not
        permit any End User to use, the Services to: (i) modify, disassemble,
        decompile, prepare derivative works of, reverse engineer or otherwise
        attempt to gain access to the source code of the Services; (ii)
        knowingly or negligently use the Services in a way that abuses,
        interferes with, or disrupts whatsoever the name of the application is’s
        networks, Your accounts, or the Services; (iii) engage in activity that
        is illegal, fraudulent, false, or misleading, (iv) transmit through the
        Services any material that may infringe the intellectual property or
        other rights of third parties; (v) build or benchmark a competitive
        product or service, or copy any features, functions or graphics of the
        Services; or (vi) use the Services to communicate any message or
        material that is harassing, libelous, threatening, obscene, indecent,
        would violate the intellectual property rights of any party or is
        otherwise unlawful, that would give rise to civil liability, or that
        constitutes or encourages conduct that could constitute a criminal
        offense, under any applicable law or regulation; (vii) upload or
        transmit any software, Content or code that does or is intended to harm,
        disable, destroy or adversely affect performance of the Services in any
        way or which does or is intended to harm or extract information or data
        from other hardware, software or networks of whatsoever the name of the
        application is or other users of Services; (viii) engage in any activity
        or use the Services in any manner that could damage, disable,
        overburden, impair or otherwise interfere with or disrupt the Services,
        or any servers or networks connected to the Services or whatsoever the
        name of the application is's security systems. (ix) use the Services in
        violation of any whatsoever the name of the application is policy or in
        a manner that violates applicable law, including but not limited to
        anti-spam, export control, privacy, and anti-terrorism laws and
        regulations and laws requiring the consent of subjects of audio and
        video recordings, and You agree that You are solely responsible for
        compliance with all such laws and regulations. Limitations on Use.You
        may not reproduce, resell, or distribute the Services or any reports or
        data generated by the Services for any purpose unless You have been
        specifically permitted to do so under a separate agreement with
        whatsoever the name of the application is. You may not offer or enable
        any third parties to use the Services purchased by You, display on any
        website or otherwise publish the Services or any Content obtained from a
        Service (other than Content created by You) or otherwise generate income
        from the Services or use the Services for the development, production or
        marketing of a service or product substantially similar to the Services.
        RESPONSIBILITY FOR END USERS. You are responsible for the activities of
        all End Users who access or use the Services through your account and
        you agree to ensure that any such End User will comply with the terms of
        this Agreement and any whatsoever the name of the application is
        policies. whatsoever the name of the application is assumes no
        responsibility or liability for violations. If You become aware of any
        violation of this Agreement in connection with use of the Services by
        any person, please contact whatsoever the name of the application is at
        violation@whatsoever the name of the application is.us. whatsoever the
        name of the application is may investigate any complaints and violations
        that come to its attention and may take any (or no) action that it
        believes is appropriate, including, but not limited to issuing warnings,
        removing the content or terminating accounts and/or User profiles. Under
        no circumstances will whatsoever the name of the application is be
        liable in any way for any data or other content viewed while using the
        Services, including, but not limited to, any errors or omissions in any
        such data or content, or any loss or damage of any kind incurred as a
        result of the use of, access to, or denial of access to any data or
        content. whatsoever the name of the application is OBLIGATIONS FOR
        CONTENT. whatsoever the name of the application is will maintain
        reasonable physical and technical safeguards to prevent unauthorized
        disclosure of or access to Content, in accordance with industry
        standards. whatsoever the name of the application is will notify You if
        it becomes aware of unauthorized access to Content. whatsoever the name
        of the application is will not access, view or process Content except
        (a) as provided for in this Agreement and in whatsoever the name of the
        application is’s Privacy Policy; (b) as authorized or instructed by You,
        (c) as required to perform its obligations under this Agreement; or (d)
        as required by Law. whatsoever the name of the application is has no
        other obligations with respect to Content. ELIGIBILITY. You affirm that
        You are at least 16 years of age and are otherwise fully able and
        competent to enter into the terms, conditions, obligations,
        affirmations, representations, and warranties set forth in this
        Agreement, and to abide by and comply with this Agreement. Your access
        may be terminated without warning if we believe that You are under the
        age of 16 or are otherwise ineligible. INTENDED USE; RESTRICTION ON USE
        BY CHILDREN. The Services are intended for business use. You may choose
        to use the Services for other purposes, subject to the terms and
        limitations of this Agreement. whatsoever the name of the application is
        is not intended for use by individuals under the age of 16, unless it is
        through a School Subscriber (as that term is defined in Exhibit A) using
        whatsoever the name of the application is for Education (K-12).
        Individuals under the age of 16 may not create accounts or use the
        Services except as described herein. CHARGES AND CANCELLATION. You agree
        that whatsoever the name of the application is may charge to Your credit
        card or other payment mechanism selected by You and approved by
        whatsoever the name of the application is ("Your Account") all amounts
        due and owing for the Services, including taxes and service fees, set up
        fees, subscription fees, or any other fee or charge associated with Your
        Account. whatsoever the name of the application is may change prices at
        any time, including changing from a free service to a paid service and
        charging for Services that were previously offered free of charge;
        provided, however, that whatsoever the name of the application is will
        provide you with prior notice and an opportunity to terminate Your
        Account if whatsoever the name of the application is changes the price
        of a Service to which you are subscribed and will not charge you for a
        previously free Service unless you have been notified of the applicable
        fees and agreed to pay such fees. You agree that in the event whatsoever
        the name of the application is is unable to collect the fees owed to
        whatsoever the name of the application is for the Services through Your
        Account, whatsoever the name of the application is may take any other
        steps it deems necessary to collect such fees from You and that You will
        be responsible for all costs and expenses incurred by whatsoever the
        name of the application is in connection with such collection activity,
        including collection fees, court costs and attorneys' fees. You further
        agree that whatsoever the name of the application is may collect
        interest at the lesser of 1.5% per month or the highest amount permitted
        by law on any amounts not paid when due. You may cancel your
        subscription at any time. If you cancel, you will not be billed for any
        additional terms of service, and service will continue until the end of
        the current Subscription Term. If you cancel, you will not receive a
        refund for any service already paid for. TERMINATION. The whatsoever the
        name of the application is website contains information on how to
        terminate Your Account. If you have purchased a Service for a specific
        term, such termination will be effective on the last day of the
        then-current term. Your Order Form may provide that a Renewal Term will
        begin automatically unless either party provides notice of termination
        at least thirty (30) days prior to the commencement of the next Renewal
        Term. If You fail to comply with any provision of this Agreement,
        whatsoever the name of the application is may terminate this Agreement
        immediately and retain any fees previously paid by You. Sections 1 and 3
        through 20, inclusive, shall survive any termination of this Agreement.
        Upon any termination of this Agreement, You must cease any further use
        of the Services. If at any time You are not happy with the Services,
        Your sole remedy is to cease using the Services and follow this
        termination process. PROPRIETARY RIGHTS. whatsoever the name of the
        application is and/or its suppliers, as applicable, retain ownership of
        all proprietary rights in the Services and in all trade names,
        trademarks, service marks, logos, and domain names ("whatsoever the name
        of the application is Marks") associated or displayed with the Services.
        You may not frame or utilize framing techniques to enclose any
        whatsoever the name of the application is Marks, or other proprietary
        information (including images, text, page layout, or form) of whatsoever
        the name of the application is without express written consent. You may
        not use any meta tags or any other "hidden text" utilizing whatsoever
        the name of the application is Marks without whatsoever the name of the
        application is's express written consent. COPYRIGHT. You may not post,
        modify, distribute, or reproduce in any way copyrighted material,
        trademarks, rights of publicity or other proprietary rights without
        obtaining the prior written consent of the owner of such proprietary
        rights. whatsoever the name of the application is may deny access to the
        Services to any User who is alleged to infringe another party's
        copyright. Without limiting the foregoing, if You believe that Your
        copyright has been infringed, please notify whatsoever the name of the
        application is as specified here. EXPORT RESTRICTIONS. You acknowledge
        that the Services, or portion thereof may be subject to the export
        control laws of the United States and other applicable country export
        control and trade sanctions laws (“Export Control and Sanctions Laws”).
        You and your End Users may not access, use, export, re-export, divert,
        transfer or disclose any portion of the Services or any related
        technical information or materials, directly or indirectly, in violation
        of any applicable export control or trade sanctions law or regulation.
        You represent and warrant that (i) You and your End Users are not
        citizens of, or located within, a country or territory that is subject
        to U.S. trade sanctions or other significant trade restrictions
        (including without limitation Cuba, Iran, North Korea, Syria, and the
        Crimea) and that you and your End Users will not access or use the
        Services, or export, re-export, divert, or transfer the Services, in or
        to such countries or territories; (ii) You and your End Users are not
        identified on any U.S. government restricted party lists (including
        without limitation the U.S. Treasury Department’s List of Specially
        Designated Nationals and Blocked Persons and Foreign Sanctions Evaders
        List, the U.S. Department of Commerce’s Denied Parties List, Entity
        List, and Unverified List, and the U.S. Department of State
        proliferation-related lists); and (iii) that no Content created or
        submitted by You or your End Users is subject to any restriction on
        disclosure, transfer, download, export or re-export under the Export
        Control Laws. You are solely responsible for complying with the Export
        Control Laws and monitoring them for any modifications. NO HIGH RISK
        USE. The Services are not designed or licensed for use in hazardous
        environments requiring fail-safe controls, including without limitation
        operation of nuclear facilities, aircraft navigation/communication
        systems, air traffic control, and life support or weapons systems. The
        Services shall not be used for or in any HIGH RISK environment.
        INJUNCTIVE RELIEF. You acknowledge that any use of the Services contrary
        to this Agreement, or any transfer, sublicensing, copying or disclosure
        of technical information or materials related to the Services, may cause
        irreparable injury to whatsoever the name of the application is, its
        Affiliates, suppliers and any other party authorized by whatsoever the
        name of the application is to resell, distribute, or promote the
        Services ("Resellers"), and under such circumstances whatsoever the name
        of the application is, its Affiliates, suppliers and Resellers will be
        entitled to equitable relief, without posting bond or other security,
        including, but not limited to, preliminary and permanent injunctive
        relief. NO WARRANTIES. YOU UNDERSTAND AND AGREE THAT THE SERVICES ARE
        PROVIDED "AS IS" AND whatsoever the name of the application is, ITS
        AFFILIATES, SUPPLIERS AND RESELLERS EXPRESSLY DISCLAIM ALL WARRANTIES OF
        ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTY
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
        NON-INFRINGEMENT. whatsoever the name of the application is, ITS
        AFFILIATES, SUPPLIERS AND RESELLERS MAKE NO WARRANTY OR REPRESENTATION
        REGARDING THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES,
        REGARDING THE ACCURACY OR RELIABILITY OF ANY INFORMATION OBTAINED
        THROUGH THE SERVICES OR THAT THE SERVICES WILL MEET ANY USER'S
        REQUIREMENTS, OR BE UNINTERRUPTED, TIMELY, SECURE OR ERROR FREE. USE OF
        THE SERVICES IS AT YOUR SOLE RISK. ANY MATERIAL AND/OR DATA DOWNLOADED
        OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICES IS AT YOUR OWN
        DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO
        YOU RESULTING FROM THE USE OF THE SERVICES. THE ENTIRE RISK ARISING OUT
        OF USE OR PERFORMANCE OF THE SERVICES REMAINS WITH YOU. whatsoever the
        name of the application is DOES NOT ASSUME ANY RESPONSIBILITY FOR
        RETENTION OF ANY USER INFORMATION OR COMMUNICATIONS BETWEEN USERS.
        whatsoever the name of the application is CANNOT GUARANTEE AND DOES NOT
        PROMISE ANY SPECIFIC RESULTS FROM USE OF THE SERVICES. USE IS AT YOUR
        OWN RISK. INDEMNIFICATION. You agree to indemnify, defend and hold
        harmless whatsoever the name of the application is, its affiliates,
        officers, directors, employees, consultants, agents, suppliers and
        Resellers from any and all third party claims, liability, damages and/or
        costs (including, but not limited to, attorneys' fees) arising from Your
        use of the Services, Your violation of this Agreement or the
        infringement or violation by You or any other user of Your account, of
        any intellectual property or other right of any person or entity or
        applicable law. LIMITATION OF LIABILITY. TO THE MAXIMUM EXTENT PERMITTED
        BY APPLICABLE LAW, IN NO EVENT WILL whatsoever the name of the
        application is OR ITS AFFILIATES, SUPPLIERS OR RESELLERS BE LIABLE FOR
        ANY SPECIAL, INCIDENTAL, INDIRECT, EXEMPLARY OR CONSEQUENTIAL DAMAGES
        WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS
        PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY
        OTHER PECUNIARY LOSS OR DAMAGE) ARISING OUT OF THE USE OF OR INABILITY
        TO USE THE SERVICES OR THE PROVISION OF OR FAILURE TO PROVIDE TECHNICAL
        OR OTHER SUPPORT SERVICES, WHETHER ARISING IN TORT (INCLUDING
        NEGLIGENCE) CONTRACT OR ANY OTHER LEGAL THEORY, EVEN IF whatsoever the
        name of the application is, ITS AFFILIATES, SUPPLIERS OR RESELLERS HAVE
        BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY CASE, whatsoever
        the name of the application is'S, ITS AFFILIATES', SUPPLIERS' AND
        RESELLERS' MAXIMUM CUMULATIVE LIABILITY AND YOUR EXCLUSIVE REMEDY FOR
        ANY CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL BE LIMITED
        TO THE AMOUNT ACTUALLY PAID BY YOU FOR THE SERVICES (IF ANY) IN THE
        TWELVE (12) MONTHS PRECEDING THE EVENT OR CIRCUMSTANCES GIVING RISE TO
        SUCH CLAIMS. Because some states and jurisdictions do not allow the
        exclusion or limitation of liability, the above limitation may not apply
        to You. AGREEMENT TO ARBITRATE; WAIVER OF CLASS ACTION. If You are
        located in the United States, You agree to resolve disputes only on an
        individual basis, through arbitration pursuant to the provisions of
        Exhibit B. The parties expressly waive any right to bring any action,
        lawsuit, or proceeding as a class or collective action, private attorney
        general action, or any other proceeding in which any party acts or
        proposes to act in a representative capacity. PRIVACY AND OTHER
        POLICIES.Use of the Services is also subject to whatsoever the name of
        the application is's Privacy Policy, a link to which is located at the
        footer on whatsoever the name of the application is's website. The
        Privacy Policy, and all policies noticed at www.whatsoever the name of
        the application is.us/legal are incorporated into this Agreement by this
        reference. Furthermore, if Your Use of the Services requires whatsoever
        the name of the application is to process any personally identifiable
        information (“PII” or “Personal Data”) whatsoever the name of the
        application is shall do so at all times in compliance with our
        whatsoever the name of the application is Global Data Processing
        Addendum https://whatsoever the name of the application
        is.us/docs/doc/whatsoever the name of the application is_GLOBAL_DPA.pdf
        is incorporated in these Terms of Service. Additionally, You understand
        and agree that whatsoever the name of the application is may contact You
        via e-mail or otherwise with information relevant to Your use of the
        Services, regardless of whether You have opted out of receiving
        marketing communications or notices. MISCELLANEOUS 20.1 Choice of Law
        and Forum. This Agreement shall be governed by and construed under the
        laws of the State of California, U.S.A., as applied to agreements
        entered into and to be performed in California by California residents.
        Except as provided in Exhibit B, the Parties consent to the exclusive
        jurisdiction and venue of the state courts located in and serving Santa
        Clara County, California and the federal courts in the Northern District
        of California. 20.2 Waiver and Severability. Failure by either Party to
        exercise any of its rights under, or to enforce any provision of, this
        Agreement will not be deemed a waiver or forfeiture of such rights or
        ability to enforce such provision. If any provision of this Agreement is
        held by a court of competent jurisdiction to be illegal, invalid or
        unenforceable, that provision will be amended to achieve as nearly as
        possible the same economic effect of the original provision and the
        remainder of this Agreement will remain in full force and effect. 20.3
        General Provisions. This Agreement embodies the entire understanding and
        agreement between the Parties respecting the subject matter of this
        Agreement and supersedes any and all prior understandings and agreements
        between the Parties respecting such subject matter, except that if You
        or Your company have executed a separate written agreement or you have
        signed an order form referencing a separate agreement governing your use
        of the Services, then such agreement shall control to the extent that
        any provision of this Agreement conflicts with the terms of such
        agreement. whatsoever the name of the application is may elect to change
        or supplement the terms of this Agreement from time to time at its sole
        discretion. whatsoever the name of the application is will exercise
        commercially reasonable business efforts to provide notice to You of any
        material changes to this Agreement. Within ten (10) business days of
        posting changes to this Agreement (or ten (10) business days from the
        date of notice, if such is provided), they will be binding on You. If
        You do not agree with the changes, You should discontinue using the
        Services. If You continue using the Services after such ten-business-day
        period, You will be deemed to have accepted the changes to the terms of
        this Agreement. In order to participate in certain Services, You may be
        notified that You are required to download software and/or agree to
        additional terms and conditions. Unless expressly set forth in such
        additional terms and conditions, those additional terms are hereby
        incorporated into this Agreement. This Agreement has been prepared in
        the English Language and such version shall be controlling in all
        respects and any non-English version of this Agreement is solely for
        accommodation purposes. Master Subscription Agreement: Exhibit A
        Services Description This Exhibit A to the whatsoever the name of the
        application is Terms of Service (“TOS”) describes the Services that may
        be ordered on an Order Form, or provided by whatsoever the name of the
        application is, and sets forth further Service-specific terms and
        conditions that may apply to whatsoever the name of the application is’s
        provision and Customer’s use of the Services. Capitalized terms not
        defined herein shall have the meanings assigned to them in the TOS.
        Definitions. For purposes of this Service Description, the following
        definitions will apply: “Host” means an individual who is an identified
        employee, contractor, or agent of Customer to whom Customer assigns the
        right to host Meetings. A Host may hold an unlimited number of Meetings,
        but only one Meeting at a time. A Host subscription may not be shared or
        used by anyone other than the individual assigned to be a Host.
        “Meeting” means a whatsoever the name of the application is Video
        meeting. “Participant” means an individual, other than the Host, who
        accesses or uses the Services, with or without the permission and
        knowledge of the Host. “whatsoever the name of the application is
        Documentation” means this Exhibit, the whatsoever the name of the
        application is website (www.whatsoever the name of the application
        is.us) and any additional description of the Services which may be
        incorporated into this Agreement. “whatsoever the name of the
        application is Meeting Services” means the various video conferencing,
        web conferencing, webinar, meeting room, screensharing and other
        collaborative services offered by whatsoever the name of the application
        is Video that Customer may order on an Order Form. “whatsoever the name
        of the application is Phone Services” means voice connectivity services,
        including, but not limited to, interconnected VoIP services,
        provisioning of direct dial numbers, and related services offered by
        whatsoever the name of the application is Voice Communications, Inc.
        (“whatsoever the name of the application is Voice”) that Customer may
        order on an Order Form. whatsoever the name of the application is
        Meeting Services. whatsoever the name of the application is Meeting
        Services enable Hosts to schedule and start Meetings and to allow
        Participants to join Meetings for the purpose of collaborating using
        voice, video, and screensharing functionality. Every meeting will have
        one Host. Chat features allow for out-of-session one-on-one or group
        collaboration. Further features, functionality, and solutions are
        described at www.whatsoever the name of the application is.us.
        whatsoever the name of the application is for Education (K-12).
        whatsoever the name of the application is for Education (K-12) allows
        schools and educators to use whatsoever the name of the application is
        Meeting Services for educational purposes. whatsoever the name of the
        application is maintains policies and procedures designed to comply with
        applicable requirements of student privacy laws including, without
        limitation, GDPR and the Family Educational Rights and Privacy Act
        (FERPA) and applicable state laws (the “Privacy Laws”). The Privacy Laws
        may provide students or their parents with certain rights in their
        personal information. If you are a parent or student and you have
        questions about the Privacy Laws or your related rights, please contact
        your school administration. whatsoever the name of the application is
        will not use any student data for marketing or advertising purposes, or
        any other commercial purpose, except to provide Services to our School
        Subscribers. If you are a “School Subscriber” — typically meaning a
        school or school district administrator or a teacher — you represent and
        warrant that you have been duly authorized by your school or school
        district to create an account, use the Services, and to agree to these
        contract terms. You further agree to use your account solely for
        educational purposes and solely for the benefit of your school or school
        district and its students. If you are a School Subscriber subject to
        U.S. or similar law, you consent, for yourself and your school or school
        district, to whatsoever the name of the application is’s collection, use
        and sharing of personal information of End Users including those who are
        children under the age of 13 in accordance with whatsoever the name of
        the application is’s K-12 Schools & Districts Privacy Policy and You
        instruct whatsoever the name of the application is to process the
        personal data of End Users in accordance with such policy. If you are a
        School Subscriber subject to GDPR or similar law, you determine the
        legal basis, means and purposes for processing the data, and instruct
        whatsoever the name of the application is to process personal
        information of End Users, including those who are children under the age
        16, in accordance with whatsoever the name of the application is’s K-12
        Schools & Districts Privacy Policy. Addendum for Connecticut School
        Subscribers: This Agreement as applied to Connecticut School Subscribers
        incorporates by reference the whatsoever the name of the application is
        Terms of Service Addendum for Connecticut School Subscribers
        (“Addendum”) which is designed to comply with the requirements of the
        Connecticut Act Concerning Student Data Privacy, Conn. Gen. Stat. Ann. §
        10-234aa-dd. whatsoever the name of the application is Phone Services.
        The following sets forth the further terms and conditions that apply to
        the whatsoever the name of the application is Phone Services.
        Definitions: For purposes of the whatsoever the name of the application
        is Phone Services, the following definitions apply: “Device” means the
        device assigned to a virtual extension or individual digital line set up
        within an account or by whatsoever the name of the application is at
        Customer’s direction or request. “Phone Host” means the individual
        assigned to a number which enables use of the whatsoever the name of the
        application is Phone Service. A Phone Host is a “Host” for purposes of
        the definition of End User “whatsoever the name of the application is
        Phone Calling Plan” means the pricing structure that enables Phone Hosts
        and End Users to access the PSTN. Calling plans may be “Metered” or
        “Unlimited” as defined on the Order Form. “whatsoever the name of the
        application is Phone Commitment” means the minimum monthly bundle of
        minutes that a whatsoever the name of the application is Phone Metered
        Calling Plan Customer commits to use in connection with whatsoever the
        name of the application is Phone Services. Telecommunications Provider.
        whatsoever the name of the application is Voice is the
        telecommunications provider of whatsoever the name of the application is
        Phone Services and sets the terms, conditions and rates for whatsoever
        the name of the application is Phone Services. Description of Services.
        whatsoever the name of the application is Phone Services are cloud-based
        phone services that use voice over internet protocol (VoIP) to provide
        Customer with the following services and functionalities (as selected by
        Customer on an Order Form): whatsoever the name of the application is
        Phone Service. whatsoever the name of the application is Phone Service
        is a cloud-based phone service that allows two-way voice calling and
        private branch exchange (PBX) functionality, and a feature set as
        described on the whatsoever the name of the application is.us website.
        Public Switched Telephone Network Communications (PSTN) Access. Phone
        Hosts and End Users can be enabled to make and receive calls to the PSTN
        and be assigned a direct inward dialing phone number (DID) via a
        whatsoever the name of the application is Phone Calling Plan. Bring Your
        Own Carrier (BYOC). BYOC allows customers to use the telecommunications
        provider of their choice to provide PSTN access and inward DID numbers.
        whatsoever the name of the application is provides BYOC customers with
        software that enables On Net Access and access to a range of whatsoever
        the name of the application is call management features and functions.
        BYOC enables customers to (i) have PSTN capability in regions where
        whatsoever the name of the application is does not offer PSTN Access;
        (ii) maintain relationships with currently deployed carriers; and/or
        (iii) configure deployments for flexibility and redundancy. Customer
        must ensure that its carrier provides all regulated telecommunications
        services and is responsible for telecommunications regulatory compliance
        Additional whatsoever the name of the application is Phone Services.
        Additional functionality such as enabling common area phones, and
        additional Toll Free and DID phone numbers may be purchased as described
        on the Order Form. Billing and Invoicing. whatsoever the name of the
        application is will bill Customer on behalf of whatsoever the name of
        the application is Voice based on the Charges set forth on the Order
        Form. Charges based on usage, or overage amounts that exceed the
        whatsoever the name of the application is Phone Commitment, will be
        billed in arrears, the month following the month a Charge is incurred.
        No adjustment will be made, or credit or refund given, for usage that is
        less than the whatsoever the name of the application is Phone
        Commitment. On Net Access. On Net capability will be provisioned by
        default for all whatsoever the name of the application is Meeting
        Services. Phone Hosts may access and use On Net services at no charge
        for so long as the underlying license to the whatsoever the name of the
        application is Meeting Service remains active. Taxes. Customer
        acknowledges and agrees that whatsoever the name of the application is
        Phone Services are subject to certain Taxes and Fees (including, but not
        limited to, assessments for universal service) that are not applicable
        to whatsoever the name of the application is Meeting Services.
        Accordingly, whatsoever the name of the application is shall invoice
        Customer for Taxes and Fees associated with the Charges. Reasonable Use
        and Right to Review. whatsoever the name of the application is Voice
        offers unlimited and metered Phone Calling Plans. These plans are
        subject to this whatsoever the name of the application is Voice
        Communications, Inc. Reasonable Use Policy. whatsoever the name of the
        application is Phone Calling Plans are for normal and reasonable
        business use; unreasonable use is prohibited. Use of whatsoever the name
        of the application is Phone may qualify as unreasonable if Customer (a)
        engages in business activities that involve continual, uninterrupted, or
        consistently excessive use of whatsoever the name of the application is
        Phone Services, (b) makes any misrepresentations to whatsoever the name
        of the application is Voice that materially affect volume or type of use
        of whatsoever the name of the application is Phone Services, (c) engages
        in fraudulent or illegal use of whatsoever the name of the application
        is Phone Services, including any activity that violates telemarketing
        laws or regulations, or (d) uses whatsoever the name of the application
        is Phone Services in any manner that harms whatsoever the name of the
        application is Voice’s network or facilities or interferes with the use
        of the service by other Customers. Use that is inconsistent with the
        types and levels of usage by typical business customers on the same plan
        may be used as an indicator of abnormal or unreasonable use, including
        but not limited to abnormal call lengths; abnormal call frequency;
        abnormal call duration; abnormal calling patterns that indicate an
        attempt to evade enforcement of this whatsoever the name of the
        application is Voice Communications, Inc. Reasonable Use Policy.
        whatsoever the name of the application is reserves the right to review
        Customer use to determine if it is consistent with this whatsoever the
        name of the application is Voice Communications, Inc. Reasonable Use
        Policy. In the event whatsoever the name of the application is Voice
        determines that You may be engaging in unreasonable use, whatsoever the
        name of the application is Voice will determine the appropriate remedy
        and will take action to remedy any unreasonable use, including, at its
        sole discretion, discussing the use with You, moving You to an
        appropriate whatsoever the name of the application is Phone Calling
        Plan, terminating certain Hosts, and/or otherwise modifying, suspending
        or terminating Your whatsoever the name of the application is Phone
        services. Termination of whatsoever the name of the application is
        Meeting Services. Access to whatsoever the name of the application is
        Phone Services requires a corresponding license to whatsoever the name
        of the application is Meeting Services. In the event that the whatsoever
        the name of the application is Meeting Service license is terminated,
        the equivalent access to whatsoever the name of the application is Phone
        Services will also be terminated. At such time, Customer will be billed
        for any incurred usage charges, and will not be credited for any
        pre-paid amounts toward the whatsoever the name of the application is
        Phone Commitment. whatsoever the name of the application is Voice
        Policies. Customer acknowledges and agrees that the whatsoever the name
        of the application is Voice Communications, Inc. policies found at
        https://whatsoever the name of the application is.us/legal apply to
        Customer’s use of whatsoever the name of the application is Phone
        Services. whatsoever the name of the application is Emergency Calling
        (E911) Customer Obligations. Customer acknowledges and agrees that
        Customer has read and understood whatsoever the name of the application
        is Voice Communications, Inc.’s Emergency Calling or 911 Customer
        Notification, found at www.whatsoever the name of the application
        is.us/legal, which sets forth specific limitations of whatsoever the
        name of the application is Phone’s emergency calling capabilities and
        Customer’s obligations with respect to its End Users. Such obligations
        include, but are not limited to: ensuring that all Phone Hosts receive
        whatsoever the name of the application is Voice’s Emergency Calling or
        911 Customer Notification; ensuring that all assigned phone numbers are
        registered for emergency calling purposes through the E911 link within
        Customer’s account, and that all registration information remains
        accurate and up to date; and distributing warning stickers or other
        appropriate labels warning End Users that emergency service may be
        limited or not available and instructing Phone Hosts to place such
        stickers on or near the Devices and other equipment used in conjunction
        with whatsoever the name of the application is Phone Services.
        whatsoever the name of the application is Voice reserves the right at
        any time to update the whatsoever the name of the application is Voice
        Communications, Inc. Emergency Calling or 911 Customer Notification as
        necessary to reflect changes in law or technology that affect the
        emergency calling capabilities of whatsoever the name of the application
        is Phone Services, and any such updates shall be effective immediately
        upon Customer’s receipt of notice. Equipment. whatsoever the name of the
        application is Voice does not supply any Devices or other equipment used
        in connection with the whatsoever the name of the application is Phone
        Services, and accordingly whatsoever the name of the application is
        Voice does not provide any guarantees as to the quality or operability
        of such Devices and equipment when used to access whatsoever the name of
        the application is Phone Services. However, whatsoever the name of the
        application is Voice does test certain Devices and equipment to
        determine whether such Devices and equipment are supported on the
        whatsoever the name of the application is Phone platform (although it
        has not tested all possible Devices and equipment available in the
        marketplace). The summary of Devices and equipment to date that
        whatsoever the name of the application is Voice has determined are
        supported by the whatsoever the name of the application is Phone
        platform may be provided on request. Customer should consult with
        whatsoever the name of the application is Voice prior to deploying any
        other Devices and equipment. Contract Variations. In the event that
        Exhibit C is included in these TOS, it identifies, by country, certain
        terms and conditions that vary from or are in addition to the terms and
        conditions otherwise set forth in these TOS (collectively, “Contract
        Variations”). Such Contract Variations are incorporated herein by
        reference and shall govern whatsoever the name of the application is’s
        provision of whatsoever the name of the application is Phone Services in
        the identified countries. whatsoever the name of the application is for
        Government. whatsoever the name of the application is for Government is
        the whatsoever the name of the application is Meeting Services offered
        by whatsoever the name of the application is in a FedRAMP-compliant
        cloud environment. whatsoever the name of the application is for
        Government enables customers to leverage a limited version of the
        whatsoever the name of the application is Meeting Services in a
        separate, FedRAMP-compliant cloud environment hosted in Amazon Web
        Services Government Cloud and whatsoever the name of the application
        is’s collocated data centers (e.g. in San Jose, CA and New York),
        independent of the whatsoever the name of the application is’s standard
        commercial cloud environment. Further features, functionality, and
        solutions are described at whatsoever the name of the application
        is.us/government. whatsoever the name of the application is for
        Government currently does not include availability of cloud recordings
        and cloud recording transcriptions, though whatsoever the name of the
        application is may continue to develop feature parity between whatsoever
        the name of the application is Meeting Services and whatsoever the name
        of the application is for Government. In addition, whatsoever the name
        of the application is does not presently offer its whatsoever the name
        of the application is Phone Services or whatsoever the name of the
        application is Marketplace as FedRAMP compliant. whatsoever the name of
        the application is Meeting Services and whatsoever the name of the
        application is for Government are independent environments and,
        therefore, data cannot be exchanged between them including, without
        limitation, instant messaging data or chat data. FedRAMP Security
        Features. whatsoever the name of the application is for Government is
        authorized as a FedRAMP Moderate ATO. TLS 1.2 or greater is required.
        Noted security features include, without limitation, secure socket layer
        (SSL) encryption, AES 256-bit encryption, role-based user security,
        watermark screenshots, firewall compatibility, password-protected
        meeting option. whatsoever the name of the application is for Government
        also supports single sign-on (SSO) with SAML, OAuth, or ADFS. Media Data
        in Meeting. When encryption is enabled, all data in transit is protected
        using TLS 1.2 and AES 256-bit encryption. Data at rest is encrypted
        leveraging AWS S3 server-side encryption. whatsoever the name of the
        application is web services are secure through HTTPS. In an encrypted
        meeting, whatsoever the name of the application is meeting keys are
        randomly generated per meeting session. Passwords are hashed/salted
        using SHA256. Chat/Notes/Closed Captioning in Meeting. When encryption
        is enabled, Chat/Notes/Closed Captioning are transferred with command
        channel, not data channel; the data travels within SSL connection, and
        there is no extra AES 256-bit encrypt/decrypt for them. whatsoever the
        name of the application is Marketplace. The whatsoever the name of the
        application is Marketplace, available at https://marketplace.whatsoever
        the name of the application is.us, is a site hosted by whatsoever the
        name of the application is to provide access to applications (the
        “Apps”) created by third party developers (“Publishers”) that are
        interoperable with whatsoever the name of the application is Services,
        and make them available from both mobile and desktop client apps. Access
        to and use of the whatsoever the name of the application is Marketplace
        and whatsoever the name of the application is for Developers (available
        at https://developer.whatsoever the name of the application is.us) sites
        are governed by separate terms and conditions available at
        https://whatsoever the name of the application is.us/service. Besides
        testing for compatibility with whatsoever the name of the application
        is, whatsoever the name of the application is does not perform any other
        testing and does not warrant or support the Apps. Publishers are solely
        responsible for all aspects of the Apps they publish, including content,
        functionality, availability and support. Publishers are required to
        provide their own terms of service, privacy policy and support
        information (“Publisher Terms”). Customers who access or download Apps
        must enter into Publisher Terms directly with the Publisher. whatsoever
        the name of the application is is not responsible for the Apps, their
        content, functionality, availability, or support. Apps are hosted AS IS
        and use of the Apps is at Customer’s own risk, subject to the Publisher
        Terms. Apps may become unavailable or be removed by a Publisher at any
        time and any data stored in them may be lost or become inaccessible.
        whatsoever the name of the application is is not responsible for
        Customer Data transferred to a Publisher, or for any transmission,
        collection, disclosure, security, modification, use or deletion of
        Customer Data by or through an App. Publishers may use Customer Data as
        permitted in the Publisher Terms. Use of the Apps may require Customer
        Data to be transferred to the Publisher and by accessing and using the
        App, Customer consents to the transfer of Customer Data by whatsoever
        the name of the application is as required by the Publisher. whatsoever
        the name of the application is does not support the Apps. Customer
        should contact the Publisher for support or questions. whatsoever the
        name of the application is makes no representations and disclaims all
        warranties, express or implied, regarding Apps and reserves the right to
        remove an App from the Marketplace at any time, in its sole discretion
        Managed Domains. whatsoever the name of the application is permits
        Customers to reserve domains associated with their enterprise and to
        manage any accounts that are subscribed to whatsoever the name of the
        application is using that domain (“Managed Domain Customer”). Customer
        may only associate to the whatsoever the name of the application is
        Services domain(s) that they own or are legally entitled to associate
        for use with the Services. In the event that a whatsoever the name of
        the application is account is created or exists on the reserved domain,
        but is not authorized by the Managed Domain Customer (the “Non-Managed
        Domain Account”), the person using or creating such Non-Managed Domain
        Account will be notified that the domain is reserved for the Managed
        Domain Customer and will be requested to change the domain associated
        with the Non-Managed Domain Account. If the person using or creating
        such Non-Managed Domain Account does not change the domain within the
        period specified, that person will be deemed to have consented to the
        Non-Managed Domain Account being added to the Managed Domain Customer
        and to have further consented for all data associated with the
        Non-Managed Domain Account to be shared with the Managed Domain
        Customer. Exhibit B Binding Arbitration This Exhibit B to the TOS
        describes the further provisions which apply to the Binding Arbitration
        and Class Action Waiver. Disputes. A dispute is any controversy between
        You and whatsoever the name of the application is concerning the
        Services, any software related to the Services, the price of the
        Services, Your account, whatsoever the name of the application is’s
        advertising, marketing, or communications, Your purchase transaction or
        billing, or any term of this Agreement, under any legal theory including
        contract, warranty, tort, statute, or regulation, except disputes
        relating to the enforcement or validity of Your or whatsoever the name
        of the application is’s intellectual property rights. As part of the
        best efforts process to resolve disputes, and prior to initiating
        arbitration proceedings, each party agrees to provide notice of the
        dispute to the other party, including a description of the dispute, what
        efforts have been made to resolve it, and what the disputing party is
        requesting as resolution, to legal@whatsoever the name of the
        application is.us. Small Claims Court Available. You may initiate an
        action in your local Small Claims Court if You meets the court’s
        requirements. However, if such a claim is transferred, removed or
        appealed to a different court, whatsoever the name of the application is
        reserves the right to require arbitration. Arbitration Procedure.
        Disputes not resolved pursuant to Section A or B shall be resolved
        through arbitration. The American Arbitration Association (“AAA”) will
        conduct any arbitration under its Commercial Arbitration Rules. For more
        information, see www.adr.org. Arbitration hearings will take place in
        the federal judicial district of Your primary business location. A
        single arbitrator will be appointed. The arbitrator must: (a) follow all
        applicable substantive Law; (b) follow applicable statutes of
        limitations; (c) honor valid claims of privilege; (d) issue a written
        decision including the reasons for the award. The arbitrator may award
        damages, declaratory or injunctive relief, and costs (including
        reasonable attorneys’ fees). Any arbitration award may be enforced (such
        as through a judgment) in any court with jurisdiction. Under AAA Rules,
        the arbitrator rules on his or her own jurisdiction, including the
        arbitrability of any claim; however, a court has exclusive authority to
        enforce the prohibition on arbitration on a class-wide basis or in a
        representative capacity . Arbitration Fees. If You are unable to afford
        the arbitration costs, whatsoever the name of the application is will
        advance those costs to You, subject to the arbitrator’s determination if
        costs should be reimbursed to whatsoever the name of the application is
        if whatsoever the name of the application is prevails. For disputes
        involving more than $75,000, the AAA rules will govern payment of filing
        fees and the AAA’s and arbitrator’s fees and expenses. Conflict with AAA
        Rules. This Agreement governs if there is a conflict with the AAA’s
        Commercial Arbitration Rules. Requirement to File Within One Year.
        Notwithstanding any other statute of limitations, a claim or dispute
        under this Agreement must be filed in Small Claims Court or noticed for
        arbitration within one year of when it could first be filed, or such
        claim will be permanently barred. Severability. If the class action
        waiver is found to be illegal or unenforceable as to all or some parts
        of a dispute, then those parts will not be arbitrated but will be
        resolved in court, with the balance resolved through arbitration. If any
        provision of this Exhibit B is found to be illegal or unenforceable,
        then that provision will be severed; however, the remaining provisions
        shall still apply and shall be interpreted to as nearly as possible
        achieve the original intent of this Exhibit, inclusive of the severed
        provision.
      </main>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
